import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'sample-websocket',
  templateUrl: './websocket.component.html',
  // styleUrls: ['./websocket.component.css'],
  styles: [
    'p,button,h1{font-family:"sans-serif"; color: #333}'
  ]
})
export class WebsocketComponent implements OnInit {

  public message: string;
  public sentMessage: string;
  private socket: Subject<any>;
  private counterSubscription: Subscription;
  constructor(websocketService: WebsocketService) {
    this.socket = websocketService.createWebsocket();
  }
  ngOnInit(): void {
    this.socket.subscribe(
      message => this.message = message.data
    );
  }
  public launchCounter(): void {
    // Counter already initialized
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      num => {
        this.sentMessage = `Websocket Message ${num}`;
        this.socket.next(this.sentMessage);
      }
    );
  }
}
