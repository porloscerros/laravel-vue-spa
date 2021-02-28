<?php

namespace App\Repositories\Users;


use App\Models\Users\Role;

class RoleRepository
{
    public function all($filters)
    {
        $user_id = $filters['user'] ?? null;
        $withUsers = $filters['with_users'] ?? null;
        return Role::when($withUsers, function ($query) {
                $query->with('users');
            })
            ->when($user_id, function ($query) use ($user_id) {
                $query->whereHas('users', function ($q) use ($user_id) {
                    $q->where('users.id', $user_id);
                });
            })
            ->get();
    }

    public function detail($id, $filters = [])
    {
        $withUsers = $filters['with_users'] ?? null;
        return Role::when($withUsers, function ($query) {
            $query->with('users');
        })
            ->findOrFail($id);
    }
}
