/* Routes */
import { rootRouterConfig } from "./app.routing";

/* Modules */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { BrowserModule, Title } from '@angular/platform-browser';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

/* Components */
import { AppComponent } from './app.component';
import { MiloComponent } from './components/milo/milo.component';
import { AboutComponent } from './components/static/about.component';
import { ContactComponent } from './components/static/contact.component';

/* Configuration */
import { firebaseConfig } from './configuration/firebase';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig),
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
    ],
    declarations: [
        AppComponent,
        MiloComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
