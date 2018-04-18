import { Component } from '@angular/core';

@Component({
    selector: 'contact-us',
    templateUrl: './contactus.template.html',
    styleUrls: ['./contactus.style.css']
})

export class ContactusComponent {

    onSubmit(contactusData:any) {
        if(!contactusData.invalid) {
            console.log(contactusData.value);
        }
    }
}