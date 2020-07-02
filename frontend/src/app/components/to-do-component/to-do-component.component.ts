import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServicesService } from 'src/app/task-services/task-services.service';
@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.css']
})
export class ToDoComponentComponent implements OnInit  {
  taskForm: FormGroup;
 ngOnInit(){
 }

  changestatus(e){

    if(this.taskForm.controls.name.value !== '' &&
      this.taskForm.controls.description.value !== '' &&
      this.taskForm.controls.repeat_task.value !== ''){
        const value = {
          name: this.taskForm.controls.name.value,
          description: this.taskForm.controls.description.value,
          repeat_task: this.taskForm.controls.repeat_task.value
        }
        this.taskservice.AddTask(value).subscribe(val=>{
        if (val.message === 'Task saved Successfully'){

          this.taskservice.updatedoneComponent();    
          this.taskForm.controls.name.setValue('')
          this.taskForm.controls.description.setValue('')
          this.taskForm.controls.repeat_task.setValue('')
          this.message.success('Task added successfully'); 
        }
        
        })
      }
  }
  constructor(private fb: FormBuilder,private message: NzMessageService,
    private taskservice:TaskServicesService) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [ Validators.required]],
      repeat_task: ['', [Validators.required]]
    });
  }

}