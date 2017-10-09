import { Component } from '@angular/core';

//Decorator:  modify classes as they're being compiled
@Component({
  selector: 'app-root', //tells Angular go and find something that it's going to fill in in the app-root selector
  templateUrl: './app.component.html', //tells Angular where to go and get the html
  styleUrls: ['./app.component.css'] //what css files we want to apply
})
//Typescript Class
export class AppComponent {
//member variable
  title = 'Things To Do';

  thingsToDo = [
    'Learn Javascript',
    'Learn Angular',
    'Learn Redux'
  ];

  thingsCompleted = [
    'Learn Typescript'
  ];

  // constructor() {
  //   //if you define a function with fat arrow syntax, you get more consisten behavior
  //   //callback function
  //   setInterval(() => {
  //     this.thingsToDo.push('make green tea');
  //   }, 1000);
  // }

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }
}
