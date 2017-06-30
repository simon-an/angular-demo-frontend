// <strong>websocket.service.ts < /strong>
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs/Rx';
@Injectable()
export class WebsocketService {
  public createWebsocket(): Subject<MessageEvent> {
    const socket = new WebSocket('wss://echo.websocket.org');
    const observable = Observable.create(
      (observer: Observer<MessageEvent>) => {
        socket.onmessage = observer.next.bind(observer);
        socket.onerror = observer.error.bind(observer);
        socket.onclose = observer.complete.bind(observer);

        return socket.close.bind(socket);
      }
    );
    const observer = {
      next: (data: any) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
