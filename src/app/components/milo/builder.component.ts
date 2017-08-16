import { Component } from '@angular/core';

@Component({
    selector: 'main-container.content',
    templateUrl: './builder.component.html'
})
export class BuilderComponent {
    public types = [
        { value: 'organisations', display: 'Organisations search' },
        { value: 'opportunities', display: 'Volunteering opportunities search' }
    ];
    public selectedType: string = "organisations";
    public filter: string = "";
    public hideTitle: boolean = false;
    public hideMap: boolean = false;

    constructor() {}

}
