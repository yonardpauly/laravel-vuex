<?php

namespace App\Http\Controllers;

use App\Services\TaskService;
use Illuminate\Http\Request;

class TaskController extends Controller
{

	public $taskService;

	public function __construct(TaskService $taskService)
	{
		$this->taskService = $taskService;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		return $this->taskService->index($request->perPage);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		return $this->taskService->index();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		return $this->taskService->index();
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  Request  $request
	 * @param $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		return $this->taskService->index();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		return $this->taskService->index();
	}
}