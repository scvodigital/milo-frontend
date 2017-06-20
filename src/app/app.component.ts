import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'getinvolved',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Scroll to top on new route
                window.scrollTo(0, 0);
            }
        });
    }
}
