import { Component, ElementRef } from '@angular/core';
// import * as jq from 'jquery';

@Component({
    selector: 'main-container.content',
    template: ''
})
export class OrganisationsComponent {
    public type: string = "organisations";
    public filter: string = "";
    public style: string = "";
    public xid: string = "";
    public hideTitle: boolean = false;
    public hideMap: boolean = true;

    constructor(private elementRef:ElementRef) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://milo.scvo.org/"+this.type+".bundle.js";
        if (this.filter !== "") s.setAttribute("data-tsi", ""+this.filter);
        if (this.style !== "") s.setAttribute("data-widget-style", ""+this.style);
        if (this.xid !== "") s.setAttribute("data-xid", ""+this.xid);
        s.setAttribute("data-hide-title", ""+this.hideTitle);
        s.setAttribute("data-hide-map", ""+this.hideMap);
        this.elementRef.nativeElement.appendChild(s);
    }
}
