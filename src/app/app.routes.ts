import { Routes } from '@angular/Router';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { MissionComponent } from './mission/mission.component';
import { ClientsComponent } from './clients/clients.component';



export const routeConfig: Routes = [
    // Whenever the path is empty, automatically redirect the user to the todo path
    { path: '', redirectTo: 'todo', pathMatch: 'full'},
    {path: 'todo', component: ToDoPageComponent },
    {path: 'todo-details/:id', component: ToDoDetailsComponent },
    {path: 'about', component: AboutComponent,
        children: [
            {path: 'mission', component: MissionComponent },
            {path: 'clients', component: ClientsComponent },
        ]},
    {path: 'contact', component: ContactComponent }
]