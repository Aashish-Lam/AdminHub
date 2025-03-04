import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  temptoggle = new BehaviorSubject<any>(false);
  toggle = this.temptoggle.asObservable();
  setToggle(received: boolean) {
    this.temptoggle.next(received);
  }
  getToggle(): any {
    return this.toggle;
  }
}
