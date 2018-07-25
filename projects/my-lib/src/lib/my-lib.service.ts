import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {


  constructor() { }

  getDemoData(): Observable<any> {
    return Observable.create(function(observer) {
      observer.next('Sumit');
    });
  }
}
