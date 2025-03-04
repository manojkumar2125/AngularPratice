import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskInput, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TaskComponents {
  @Input() name?: string;
  @Input({required: true}) userId!:string;
  @Input({required: true}) userName!:string;
  isAddTask = false;
  constructor(private taskService: TasksService) {}
  
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onTaskComplete(taskId: string) {
  }
  onStartAddTask() {
  this.isAddTask = true;
  }

  onCancelAddTask() {
    this.isAddTask = false;
  }
}
