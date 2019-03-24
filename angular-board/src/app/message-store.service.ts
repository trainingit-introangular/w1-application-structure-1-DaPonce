import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageStoreService {
  private msg = '';
  private msg$ = new BehaviorSubject<string>('Test');

  constructor() {}
  public select$ = () => this.msg$.asObservable();
  public dispatch(msg) {
    this.msg = msg;
    this.msg$.next(this.msg);
  }
}
