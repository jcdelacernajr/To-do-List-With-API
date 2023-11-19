import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskData } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private baseUrl: string = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  public getBaseUrl(): string {
    return this.baseUrl;
  }

   // create a method here to fitch the data from the database
   getTaskData(): Observable<TaskData[]> {
    return this.http.get<TaskData[]>(`${this.baseUrl}/task`)
  }

  submitTaskForm(taskData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.post(`${this.baseUrl}/save-task`, taskData, options);
  }

  updateTask(taskData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.put(`${this.baseUrl}/update-task/${taskData.id}`, taskData, options);
  }
  
}
