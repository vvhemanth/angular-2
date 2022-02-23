import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listeners',
  templateUrl: './listeners.component.html',
  styleUrls: ['./listeners.component.css']
})
export class ListenersComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
@ViewChild('sample') sample:any;
  ngOnInit() {
  }
  @HostBinding('attr.role') role = 'admin';
  @HostListener('click',['$event','this.sample.nativeElement']) onClick(event) {
    console.log(event)
    this.role = this.role === 'admin' ? 'guest' : 'admin';
  }

  @HostBinding('style.backgroundColor') c_colorrr = "red";

  @HostListener('mouseenter') c_onEnterrr() {
    this.c_colorrr = "blue";
  }

  @HostListener('mouseleave') c_onLeaveee() {
    this.c_colorrr = "yellow";
  }


  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('input');
    // this.renderer.setStyle(part, 'display', 'block');
    this.renderer.addClass(part, 'highlight');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('input');
    //  this.renderer.setStyle(part, 'display', 'none');
    this.renderer.removeClass(part, 'highlight');
  }
  @HostListener('keydown',['$event','this.sample.nativeElement']) 
  onkeydown(event) {
    console.log(event)
  }
  @HostListener('keyup',['$event','this.sample.nativeElement']) onkeyup(event) {
    console.log(event)
  }

  someFocus(event) {
    console.log(event)
  }
  onenter(event) {
    event.preventDefault();
    console.log(event)
  }
  onBlur(event) {
    console.log(event)
  }


}
