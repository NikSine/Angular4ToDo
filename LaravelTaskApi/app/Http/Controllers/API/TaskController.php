<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Task;
use Illuminate\Support\Facades\Auth;
use Validator;

class TaskController extends Controller
{
    public function getTasks()
    {
      $userId = Auth::id();
      $tasks = Task::where('user_id', $userId)->orderBy('done', 'asc')->get();
      return $tasks;
    }

    public function createTask(Request $request)
    {
      if(Auth::id()){
        $request['user_id'] = Auth::id();
        $request['done'] = false;
      } else {
        return response()->json(['error'=>'Permission denied'], 401);
      }
      $validator = Validator::make($request->all(), [
          'text' => 'required',
      ]);
      if ($validator->fails()) {
          return response()->json(['error'=>$validator->errors()], 401);
      }
      $input = $request->all();
      $task = Task::create($input);
      return $task;
    }

    public function doneTask(Request $request){
      if(Auth::id() && !empty($request)){
        $task = Task::where('id', $request['id'])->update(['done' => true]);
        return response()->json();
      } else {
        return response()->json(['error'=>'Permission denied'], 401);
      }
    }

    public function updateTask(Request $request)
    {
      if(Auth::id()){
        $validator = Validator::make($request->all(), [
          'text' => 'required',
        ]);
        if ($validator->fails()) {
          return response()->json(['error'=>$validator->errors()], 401);
        }
        $task = Task::where('id', $request['id'])->update(['text' => $request['text']]);
        return response()->json();
      }
    }

    public function removeTask(Request $request){
      if(Auth::id() && !empty($request)){
        $task = Task::where('id', $request['id'])->delete();
        return response()->json();
      } else {
        return response()->json(['error'=>'Permission denied'], 401);
      }
    }

}
