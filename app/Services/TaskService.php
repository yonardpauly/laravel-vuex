<?php

namespace App\Services;

use App\Models\Task;

class TaskService
{

	private $task;

	public function __construct(Task $task)
	{
		$this->task = $task;
	}

	public function index($perPage = 5)
	{
		return $this->task->paginate($perPage);
	}

}