<?php

namespace App\Http\Resources\Users;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Users\Role as RoleResource;
use App\Http\Resources\SalePoints\SalePoint as SalePointResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => (int) $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
        ];

        if ($this->relationLoaded('roles'))
            $data['role'] = new RoleResource($this->roles->first());

        return $data;
    }
}
