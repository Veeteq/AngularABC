import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { Login } from './features/login/login';
import { Contact } from './features/contact/contact';
import { NotFoundComponent } from './features/not-found/not-found';
import { Experience } from './features/about/experience/experience';
import { Skill } from './features/about/skill/skill';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', component: Experience },
            { path: 'experience', component: Experience },
            { path: 'skill', component: Skill }
        ]
    },
    { path: 'login', component: Login },
    { path: 'contact', component: Contact },
    { path: '**', component: NotFoundComponent }
];
