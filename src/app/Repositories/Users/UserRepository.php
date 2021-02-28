<?php

namespace App\Repositories\Users;


use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserRepository
{
    public function all($filters)
    {
        $role_id = $filters['role'] ?? null;
        $with_roles = $filters['with_roles'] ?? null;
        return User::when($with_roles, function ($query) {
            $query->with('roles');
        })
            ->when($role_id, function ($query) use ($role_id) {
                $query->whereHas('roles', function ($q) use ($role_id) {
                    $q->where('roles.id', $role_id);
                });
            })
            ->get();
    }

    public function detail($id, $filters = [])
    {
        $with_roles = $filters['with_roles'] ?? null;
        return User::when($with_roles, function ($query) {
            $query->with('roles');
        })
            ->findOrFail($id);
    }

    public function create(array $data)
    {
        DB::beginTransaction();
        try {
            $model = new User;
            $model->name = $data['name'];
            $model->username = $data['username'];
            $model->email = $data['email'];
            $model->password = Hash::make($data['password']);
            $model->save();
            $model->roles()->sync($data['role_id']);
            DB::commit();
            return $model;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function update(array $data, $id)
    {
        DB::beginTransaction();
        try {
            $model = User::findOrFail($id);
            $model->name = $data['name'];
            $model->username = $data['username'];
            if (array_key_exists('password', $data) && $data['password']) {
                $data['password'] = Hash::make($data['password']);
                $model->password = $data['password'];
            }
            $model->save();
            $model->roles()->sync($data['role_id']);
            DB::commit();
            return $model;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();
    }
}
