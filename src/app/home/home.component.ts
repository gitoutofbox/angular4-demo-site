import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.template.html',
    styleUrls:['./home.style.css']
})

export class HomeComponent {    
    private borderColor: string = 'blue';
    private headlineOnly: boolean = true;
    private noOfNews: number = 5;
    
    // private myCount: number = 10;
    // private showModal: boolean = false;

    // countChange(event:any) {
    //     this.myCount = event;
    //   }
    // hideModalEvent(event:boolean) {
    //     this.showModal = event;
    // }
}