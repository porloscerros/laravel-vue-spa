<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $roles = array_slice(func_get_args(), 2);

        if ($request->user()->hasRole('admin') || $request->user()->hasAnyRole($roles) || empty($roles)) {
            return $next($request);
        }

        if ($request->ajax() || $request->wantsJson())
        {
            return response([
                'error' => [
                    'code' => 'INSUFFICIENT_ROLE',
                    'description' => 'You are not authorized to access this resource.'
                ]
            ], 403);
        }
        abort(404, 'Unauthorized action.');
    }
}
