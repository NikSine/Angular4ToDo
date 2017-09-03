<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['text', 'user_id', 'done'];
    public function tasks()
    {
      return $this->hasMany('App\Task');
    }
}
