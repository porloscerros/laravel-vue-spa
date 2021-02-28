<?php

namespace App\Models;

use App\Models\Users\Role;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Return the user's roles
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    /**
     * Return the user's role
     */
    public function role()
    {
        return $this->roles()->first();
    }

    function getRoleAttribute() {
        return $this->role();
    }

    /**
     * Check if the user has a role
     */
    public function hasRole($role)
    {
        if ($this->roles->where('keyname', $role)->isNotEmpty())
            return true;
        return false;
    }

    /**
     * Check if the user has role in array
     */
    public function hasAnyRole($roles)
    {
        if ($this->roles->whereIn('keyname', $roles)->isNotEmpty())
            return true;
        return false;
    }
}
