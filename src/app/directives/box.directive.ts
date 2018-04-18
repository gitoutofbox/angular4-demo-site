import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';


@Directive({ selector: '[myBox]' })

export class BoxDirective {
    
    constructor(private el: ElementRef, private renderer: Renderer) {
     this.setBorder('transparent'); 
     this.renderer.setElementStyle(this.el.nativeElement, 'font-style', 'italic');
    }
    @Input('myBox') boxBorderColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.boxBorderColor || 'transparent');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('transparent');
    }
    setBorder(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'border', '2px solid '+color);
    }
      
}