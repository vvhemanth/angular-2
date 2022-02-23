
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-other-concepts',
  templateUrl: './other-concepts.component.html',
  styleUrls: ['./other-concepts.component.css']
})
export class OtherConceptsComponent implements OnInit {

  @ViewChild('simple') mytestComp :ChildComponent;
  @ViewChild('sampleItem') sampleItem:ElementRef;
  constructor() { 
    
  }

  ngOnInit() {
    this.mytestComp.type = 'time';
  //  this.sampleItem.nativeElement.children[0].innerHTML
    console.log(this.sampleItem)
  }
  ngAfterViewInit(): void {
      
  }
}
