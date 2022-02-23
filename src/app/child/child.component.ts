import { Component, Input, OnInit, Output,EventEmitter, HostBinding } from '@angular/core';
import {CommonService} from'../common.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private sampleService:CommonService) { }
  @Input() data = 34;
  @Input() sampleArray = [];
  @Input() sampleOnject = {};
  @Input() type='text';
  @Output() something = new EventEmitter();
  sampleData;
  @HostBinding('style.border') border: string;
   ngOnInit() {
    this.border="5px solid blue"
     console.log(this.data)
 
     this.sampleArray.forEach(element => {
       if(element.age === this.data) {
       this.something.emit(element)
       }
     })
 
     this.sampleService.sample.subscribe(data =>{
   this.sampleData = data;
     })
   }
 
   clickme(data) {
     this.something.emit(data+'something special') // sending data from child to parent
   }
 
   sample() {
     this.sampleService.sampleMethod('45') //child
   }

   
 
}
