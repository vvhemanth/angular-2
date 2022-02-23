import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  componetRef: any;
  data: any;

  constructor(private resolver:ComponentFactoryResolver) { }
  @ViewChild('container',{read: ViewContainerRef}) container;

  ngOnInit() {
  }

  createComponent() {
    const factory = this.resolver.resolveComponentFactory(ParentComponent);
    this.componetRef = this.container.createComponent(factory);
   this.data = this.componetRef.instance.data;
  //  this.componetRef.instance.data = this.data;
  }

  clear() {
    this.container.clear();
  }

}
