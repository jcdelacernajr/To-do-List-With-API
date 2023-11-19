package com.netzontech.todolistwithapi.controller;

import java.io.Console;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.netzontech.todolistwithapi.model.entity.Task;
import com.netzontech.todolistwithapi.model.pojo.TaskData;
import com.netzontech.todolistwithapi.service.TodoListService;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class TodoListController {
	
	private final TodoListService todoListService;
	
	@Autowired
	public TodoListController(TodoListService todoListService) {
		this.todoListService = todoListService;
	}
	
	/**
	 * Get all the task
	 * 
	 * */
	@GetMapping("/task")
	public List<Task> getTask() {
		return todoListService.task();
	}

	/**
	 * Save the task data
	 * */
	@PostMapping("/save-task")
	public ResponseEntity<Map<String, String>> saveTask(@RequestBody TaskData task) {
		Task result = todoListService.insertTask(task);
		Map<String, String> response = new HashMap<>();
		if (result != null) {
			response.put("message", "Task has been successfully recorded.");
		} else {
			response.put("message", "Error saving task...");
		}
		return ResponseEntity.ok(response);
	}
	
	/**
	 * Update the task by id
	 * */
	@PutMapping("/update-task/{id}")
	public Task updateTask(@PathVariable Long id, @RequestBody TaskData task) {
		return todoListService.updateTask(id, task);
	}
	
	
}
