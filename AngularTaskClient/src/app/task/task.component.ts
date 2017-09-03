import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task } from '../models/index';
import { TaskService } from '../services/index';
import { fadeInAnimation } from '../animations/index';
import { taskFadeInOutAnimation } from '../animations/index';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['../app.component.css'],
    animations: [fadeInAnimation, taskFadeInOutAnimation],
    host: { '[@fadeInAnimation]': '', '[@taskFadeInOutAnimation]': ''}
})

export class TaskComponent implements OnInit {
    error = '';
    tasks: Task[] = [];
    newTaskText = '';
    taskId:number;
    constructor(private taskService: TaskService) { }

    ngOnInit() {
        // get users from secure api end point
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }
    createTask(){
      this.taskService.createTask(this.newTaskText)
          .subscribe(result => {
            if(result){
              result.text = this.newTaskText;
              this.tasks.push(result);
              this.newTaskText = '';
            } else {
            }
          });
    }
    doneTask(event){
      let target = event.target;
      let targetId = target.parentNode.getAttribute('data-id');
      this.taskService.doneTask(targetId)
          .subscribe(result => {
            if(result){
              this.tasks.find(task => task.id == targetId).done = true;
            } else {

            }
          });
    }
    removeTask(event){
      let target = event.target;
      let targetId = target.parentNode.getAttribute('data-id');
      this.taskService.removeTask(targetId)
          .subscribe(result => {
            if(result){
              let currentTask = this.tasks.find(task => task.id == targetId);
              this.tasks = this.tasks.filter(task => task !== currentTask);
            } else {

            }
          });
    }
    updateTask(event){
      let target = event.target;
      let text = event.target.outerText;
      let targetId = target.parentNode.getAttribute('data-id');
      target.setAttribute('contenteditable', 'false');
      this.taskService.updateTask(targetId, text)
          .subscribe(result => {
            if(result){
              target.setAttribute('contenteditable', 'true');
            } else {

            }
          });
    }
}
