import { Routes } from '@angular/router';

import { OpportunitiesComponent } from './components/milo/opportunities.component';
import { OrganisationsComponent } from './components/milo/organisations.component';
import { AboutComponent } from './components/static/about.component';
import { ContactComponent } from './components/static/contact.component';

export const rootRouterConfig: Routes = [
    { path: '', component: OpportunitiesComponent, pathMatch: 'full' },
    { path: 'organisations', component: OrganisationsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: OpportunitiesComponent }
];
