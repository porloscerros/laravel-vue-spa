<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name', 'keyname'];

    protected $hidden = ['pivot'];

    /**
     * Return the role's users
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
