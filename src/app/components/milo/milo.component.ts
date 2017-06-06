import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'content',
    template: ''
})
export class MiloComponent {
    constructor(private elementRef:ElementRef) {}

    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://milo.scvo.org.uk/organisations.bundle.js";
        s.setAttribute("data-hide-map", "true");
        this.elementRef.nativeElement.appendChild(s);
    }
}
