package com.netzontech.todolistwithapi.model.entity;

import java.sql.Timestamp;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="task")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "task_id")
	private long id;
	
	@Column(name = "task", columnDefinition = "TEXT")
	private String task;
	
	@Column(name = "deadline", nullable = true)
	private Date deadline;
	
	@Column(name = "checked", nullable = true)
	private Boolean checked;
	
	@Column(name = "completionTime", nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp completionTime;

	@Column(name = "created_at", nullable = true)
	private Date createdAt;

	@Column(name = "updated_at", nullable = true)
    @Temporal(TemporalType.DATE)
	private Date updatedAt;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}

	public Timestamp getCompletionTime() {
		return completionTime;
	}

	public void setCompletionTime(Timestamp completionTime) {
		this.completionTime = completionTime;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	
}
