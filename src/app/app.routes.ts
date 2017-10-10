import { Routes } from '@angular/Router';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

export const routeConfig: Routes = [
    // Whenever the path is empty, automatically redirect the user to the todo path
    { path: '', redirectTo: 'todo', pathMatch: 'full'},
    {path: 'todo', component: ToDoPageComponent }
]