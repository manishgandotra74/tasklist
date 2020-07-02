import { Component, OnInit } from '@angular/core';
import { TaskServicesService } from 'src/app/task-services/task-services.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {
alltaskList:[]
  constructor(private taskservice:TaskServicesService) {
   }
  changeListener(e,data){
  const params ={
  id :data._id, 
  status : data.status
}
    this.taskservice.TaskstatusUpdate(params).subscribe(res=>{
this.taskservice.updateallComponent();    
    })
  }
  ngOnInit(): void {
      this.taskservice.getAlltasks().subscribe(tasklist =>{
        this.alltaskList = tasklist.tasks;
     });    
     if (this.taskservice.subsVar === undefined) {    
      this.taskservice.subsVar = this.taskservice.invokeFirstComponentFunction.subscribe((name:string) => {    
        this.taskservice.getAlltasks().subscribe(tasklist =>{
          this.alltaskList = tasklist.tasks;
        })    });    
    } 
  } 
}
