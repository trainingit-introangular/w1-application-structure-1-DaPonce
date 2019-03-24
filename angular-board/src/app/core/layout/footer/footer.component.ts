import { Component, OnInit } from '@angular/core';
import { MessageStoreService } from 'src/app/message-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public msg$;
  constructor(private messageStore: MessageStoreService) {}

  ngOnInit() {
    this.msg$ = this.messageStore.select$();
  }
}
