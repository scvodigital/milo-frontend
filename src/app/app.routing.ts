import { Routes } from '@angular/router';

import { BuilderComponent } from './components/milo/builder.component';
import { AboutComponent } from './components/static/about.component';
import { ContactComponent } from './components/static/contact.component';

export const rootRouterConfig: Routes = [
    { path: '', component: BuilderComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: BuilderComponent }
];
