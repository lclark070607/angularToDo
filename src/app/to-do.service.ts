import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  //changes will repeatedly serve a list of strings to any of our subscribers/observers
  //use a behavior subject to not expose any of the internal variables
  changes: BehaviorSubject<string[]> = new BehaviorSubject([]);
  thingsToDo: string [] = [];
  constructor() { }

  addItem(item:string) {
    this.thingsToDo.push(item);
    this.changes.next(this.thingsToDo);
  }

  getTasks() {
    // return this.thingsToDo;  You want to return some kind of Event Emitter (behavior subject/observable and observer at the same time)
    return this.changes;
  }
}
