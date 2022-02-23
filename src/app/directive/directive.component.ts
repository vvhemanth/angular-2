import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';
@Directive({
  selector: '[something]'
})
export class changeTextDirective implements OnInit  {
    constructor( private el: ElementRef) {
        console.log(el)
        // el.nativeElement.value
   //  el.nativeElement.innerHTML = '<b>Text is changed due to directive<b>'
    }
    ngOnInit(): void {
       
    }

      @HostListener('blur') onBlur() {
        if(parseInt(this.el.nativeElement.value) === 45) {
            //do something
            this.el.nativeElement.style.color = 'red';
        } else {
            this.el.nativeElement.style.color = 'green';
        }
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.addColor('yellow')
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.addColor('red')
    }
    addColor(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
      this.el.nativeElement.style.width = '315px';
    
    }

    @HostListener('focus', ['$event.target'])
    onFocus(target) {
      console.log("Focus called");
      
      
    }
  @HostListener('focusout', ['$event.target'])
  onFocusout(target) {
    console.log("Focus out called");
 
  }

    // 1. custom directive
    // 2. structural directive
    // 3. attribute directive
}