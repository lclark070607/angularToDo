import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
// job is to provide list, passive display of data
export class ToDoListComponent implements OnInit {
  //modifing the definition of the variable heading
  //have to tell typescript that defines the variable

  //thingsToDo recieves array of strings
  thingsToDo: string[];
  
  constructor(private toDoService: ToDoService) {

   }

  ngOnInit() {
    this.thingsToDo = this.toDoService.getTasks();
  }

}
