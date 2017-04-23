import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'sample-websocket',
  templateUrl: './websocket.component.html',
  // styleUrls: ['./websocket.component.css'],
  styles: [
    'p,button,h1{font-family:"sans-serif"; color: #333}',
  ],
})
export class WebsocketComponent implements OnInit {

  private socket: Subject<any>;
  private counterSubscription: Subscription;
  private message: string;
  private sentMessage: string;
  constructor(websocketService: WebsocketService) {
    this.socket = websocketService.createWebsocket();
  }
  ngOnInit() {
    this.socket.subscribe(
      (message) => this.message = message.data,
    );
  }
  private launchCounter() {
    // Counter already initialized
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (num) => {
        this.sentMessage = 'Websocket Message ' + num;
        this.socket.next(this.sentMessage);
      },
    );
  }
}
