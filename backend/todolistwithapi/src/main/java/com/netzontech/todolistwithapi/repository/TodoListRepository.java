package com.netzontech.todolistwithapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.netzontech.todolistwithapi.model.entity.Task;

public interface TodoListRepository extends JpaRepository<Task , Long> {

}
