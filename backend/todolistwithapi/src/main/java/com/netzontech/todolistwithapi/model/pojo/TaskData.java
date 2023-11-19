package com.netzontech.todolistwithapi.model.pojo;

import java.sql.Date;

public class TaskData {
	
	private long id;

	private String task;

	private Date deadline;
	
	private Boolean checked;

	private String completionTime;
	
	private Date createdAt;

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
	
	public String getCompletionTime() {
		return completionTime;
	}

	public void setCompletionTime(String completionTime) {
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

	@Override
	public String toString() {
		return "TaskData [id=" + id + ", task=" + task + ", deadline=" + deadline + ", checked=" + checked
				+ ", completionTime=" + completionTime + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

}
