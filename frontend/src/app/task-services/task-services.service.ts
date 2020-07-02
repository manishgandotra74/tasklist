import { Injectable, EventEmitter } from '@angular/core';    
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {
  appPath = environment.backendURL_local;
  invokeAddTaskComponentFunction = new EventEmitter();
  invokeFirstComponentFunction = new EventEmitter();   
  invokeSecondComponentFunction = new EventEmitter();
  subsVar: Subscription;    
  subsVar2: Subscription;   

  constructor(  private http: HttpClient,
    ) { }
    updatedoneComponent() {    
      this.invokeFirstComponentFunction.emit();    
    } 
    updateallComponent() {    
      this.invokeSecondComponentFunction.emit();    
    } 

      getAlltasks() {
      return this.http.get('http://localhost:4000/tasks/get-all-task').pipe(map((response: any) => response))
     }
      getCompletedTasks() {
      return this.http.get('http://localhost:4000/tasks/get-completed-task').pipe(map((response: any) => response))
     }
      TaskstatusUpdate(params) {
      return this.http.post('http://localhost:4000/tasks/change-status',params).pipe(map((response: any) => response))
     }
      AddTask(params) {
      return this.http.post('http://localhost:4000/tasks/add-task',params).pipe(map((response: any) => response))
     }
}
