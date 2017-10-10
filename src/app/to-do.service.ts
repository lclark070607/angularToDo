import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {

  thingsToDo: string [] = [];
  constructor() { }

  addItem(item:string) {
    this.thingsToDo.push(item);
  }

  getTasks() {
    return this.thingsToDo;
  }
}
