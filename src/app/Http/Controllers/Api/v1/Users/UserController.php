<?php

namespace App\Http\Controllers\Api\v1\Users;


use App\Http\Requests\Users\UserStoreRequest;
use App\Http\Requests\Users\UserUpdateRequest;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\Users\User as UserResource;
use App\Http\Resources\Users\AuthUser as AuthUserResource;

class UserController extends Controller
{

    /**
     * @var UserRepository
     */
    private $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        try {
            $filters = $request->only(['role', 'with_roles', 'with_sale_points']);
            $data = $this->repository->all($filters);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error retrieving the records' ], 500);
        }
        return UserResource::collection($data);
    }

    public function show(Request $request, $id)
    {
        $filters = $request->only(['with_roles', 'with_sale_points']);
        try {
            $model = $this->repository->detail($id, $filters);
            return new UserResource($model);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error retrieving the records' ], 500);
        }
    }

    public function store(UserStoreRequest $request)
    {
        try {
            $data = $request->validated();
            $model = $this->repository->create($data);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error saving the records' ], 500);
        }

        return response()->json([
            'data' => [
                'id' => $model->id,
                'created_at' => $model->created_at,
            ]
        ], 201);
    }

    public function update(UserUpdateRequest $request, $id)
    {
        try {
            $data = $request->validated();
            $model = $this->repository->update($data, $id);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error updating the records' ], 500);
        }
        return response()->json([
            'data' => [
                'id' => $model->id,
                'updated_at' => $model->updated_at,
            ]
        ], 201);
    }

    public function destroy(Request $request, $id)
    {
        try {
            $this->repository->delete($id);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error removing the record' ], 500);
        }
        return response()->json([
            'message' => 'Successfully deleted record!'
        ], 204);
    }

    public function showme(Request $request)
    {
        $model = $this->repository->detail(Auth::id(), [
            'with_roles' => true,
        ]);
        return new AuthUserResource($model);
    }
}

