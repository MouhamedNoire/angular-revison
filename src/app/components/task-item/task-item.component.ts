import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  // @ts-ignore
  @Input() task : Task;

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {
  }
  ngOnInit() {
  }
  onDelete(task :Task){
    this.onDeleteTask.emit(task);
    /** un event emitter permet de detecter un evenement et de capter l evevenement
     dans ce cas ci elle capte le task et l envoie dans la classe mere d ou le output ainsi dans
     la classe mere on utilise le onDeleteTask() et on lui passe la fonction deleteTask()
     de la classe mere avec comme parametre le task capte par l event emitter .**/
  }
  onToggle(task : Task){
    this.onToggleReminder.emit(task);
  }
}
