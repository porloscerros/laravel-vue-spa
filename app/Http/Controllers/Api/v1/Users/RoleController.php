<?php

namespace App\Http\Controllers\Api\v1\Users;


use App\Http\Controllers\Controller;
use App\Models\Users\Role;
use App\Repositories\Users\RoleRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RoleController extends Controller
{

    /**
     * @var RoleRepository
     */
    private $repository;

    public function __construct(RoleRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        $filters = $request->only(['user', 'with_users']);
        try {
            $data = $this->repository->all($filters);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json([ 'message' => 'There was an error retrieving the records' ], 500);
        }
        return response()->json(['data' => $data]);
    }

    public function show(Request $request, $id)
    {
        $filters = $request->only(['with_users']);
        return $this->repository->detail($id, $filters);
    }
}
