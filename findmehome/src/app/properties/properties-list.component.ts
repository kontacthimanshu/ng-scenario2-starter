import { Component } from '@angular/core';

@Component({
    selector: 'properties-list',
    templateUrl: './properties-list.component.html'
})
export class PropertiesListComponent
{
    prop:any = {
        name: 'Bibola House',
        price: 90000,
        builtUpArea: '1440 sq. ft.',
        carpetArea: '1440 sq. ft.',
        configuration: '3 Bedrooms, 3 Bathrooms, Others',
        facing: 'East',
        age: '3 years',
        type: 'Individual House',
        location: {
        address: '1 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        }
        
    };

    handleClick(args)
    {
        console.log(args);
    }
}