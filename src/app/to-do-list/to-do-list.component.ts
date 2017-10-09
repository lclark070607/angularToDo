import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  //modifing the definition of the variable heading
  //have to tell typescript that defines the variable
  @Input() thingsToDo: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
