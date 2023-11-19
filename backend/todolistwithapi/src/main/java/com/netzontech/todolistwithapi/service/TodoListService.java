package com.netzontech.todolistwithapi.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.netzontech.todolistwithapi.model.entity.Task;
import com.netzontech.todolistwithapi.model.pojo.TaskData;
import com.netzontech.todolistwithapi.repository.TodoListRepository;
import com.netzontech.todolistwithapi.util.SQLDateUtil;
import com.netzontech.todolistwithapi.util.Util;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class TodoListService {

	private final TodoListRepository todoListRepository;
	
	public TodoListService(TodoListRepository todoListRepository) {
		this.todoListRepository = todoListRepository;
	}

	public List<Task> task() {
		return todoListRepository.findAll();
	}
	
	
	@Transactional
	public Task insertTask(TaskData data) {
		try {
			Task task = new Task();
			task.setTask(data.getTask());
			task.setDeadline(data.getDeadline());
			
			task.setCompletionTime(data.getCompletionTime() == "" ? null :
					SQLDateUtil.getSSQLTimestamp(data.getCompletionTime()));
			
			task.setChecked(Boolean.valueOf(data.getChecked()));
			task.setCreatedAt(Util.getCurrentDate());
			
			return todoListRepository.save(task);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public Task updateTask(Long id, TaskData data) {
		try {
			Task task = todoListRepository.findById(id)
					.orElseThrow(() -> new EntityNotFoundException("Record not found with id: " + id));
			
			task.setTask(data.getTask());
			task.setDeadline(data.getDeadline());
			task.setCompletionTime(Util.getTimestamp());
			task.setChecked(Boolean.valueOf(data.getChecked()));
			task.setUpdatedAt(Util.getCurrentDate());
			return todoListRepository.save(task);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}
