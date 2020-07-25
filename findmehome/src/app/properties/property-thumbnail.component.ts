import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'property-thumbnail',
    templateUrl: './property-thumbnail.component.html'
})
export class PropertyThumbnailComponent
{
    @Input() inpProp;
}