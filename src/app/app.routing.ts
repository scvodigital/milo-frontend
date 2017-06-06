import { Routes } from '@angular/router';

import { MiloComponent } from './components/milo/milo.component';
import { AboutComponent } from './components/static/about.component';
import { ContactComponent } from './components/static/contact.component';

export const rootRouterConfig: Routes = [
    { path: '', component: MiloComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: MiloComponent }
];
