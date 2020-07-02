import { Component, OnInit } from '@angular/core';
import { TaskServicesService } from 'src/app/task-services/task-services.service';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css']
})
export class DoneListComponentComponent implements OnInit {
  allcompTask:[]
  constructor(private taskservice:TaskServicesService) { }
  changeListener(e,data){
    const params ={
      id :data._id, 
      status : data.status
    }
        this.taskservice.TaskstatusUpdate(params).subscribe(res=>{
        this.taskservice.updatedoneComponent();    
        })
      }
  ngOnInit(): void {
    this.taskservice.getCompletedTasks().subscribe(tasklist =>{
      this.allcompTask = tasklist.tasks;
    });
    if (this.taskservice.subsVar2 === undefined) {    
      this.taskservice.subsVar2 = this.taskservice.invokeSecondComponentFunction.subscribe((name:string) => {    
        this.taskservice.getCompletedTasks().subscribe(tasklist =>{
          this.allcompTask = tasklist.tasks;
        })    });    
    } 
  }

}
