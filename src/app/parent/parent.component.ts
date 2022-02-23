import { Component, OnInit } from '@angular/core';
import {CommonService} from'../common.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private CommonService:CommonService) { }
  public data = 20;
   public sample;
   public servicedata; //on load 
   public sampleData = 45;

   public Iscolor = true;
  public val = 15;
   public date = 'date';
   public array = [{
     name:'hemu',
     age:20
   },
   {
    name:'raja',
    age:34
  },
  {
    name:'sai',
    age:45
  },
  ]
  ngOnInit() {
    this.CommonService.sample.subscribe(data =>{
      this.servicedata = data;
    })
  }


  changeEvent(event) {
this.sample = event;
  }

  someData() {
    this.CommonService.sampleMethod('36')
  }
}
