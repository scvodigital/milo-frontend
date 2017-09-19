/* Routes */
import { rootRouterConfig } from "./app.routing";

/* Modules */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

/* Components */
import { AppComponent } from './app.component';
import { OpportunitiesComponent } from './components/milo/opportunities.component';
import { OrganisationsComponent } from './components/milo/organisations.component';
import { AboutComponent } from './components/static/about.component';
import { ContactComponent } from './components/static/contact.component';

/* Configuration */
import { firebaseConfig } from './configuration/firebase';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(rootRouterConfig),
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
    ],
    declarations: [
        AppComponent,
        OpportunitiesComponent,
        OrganisationsComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
