import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'myModal',
    templateUrl: './modal.template.html',
    styleUrls:['./modal.style.css']
})

export class ModalComponent {
    @Input() showModal: boolean = false;
    @Input() data: any;
    @Output() hideModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
   
    closeModal() {
        this.showModal = false; 
        this.hideModalEvent.emit(this.showModal);       
    }
}