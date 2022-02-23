import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public item = 23;
  sample = new BehaviorSubject<any>('');

  constructor() { }

  sampleMethod(data) {
  this.sample.next(data)
  }
}
