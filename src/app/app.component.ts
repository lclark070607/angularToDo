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
    'Learn Typescript',
    'Learn Angular',
    'Learn Redux'
  ];
}
