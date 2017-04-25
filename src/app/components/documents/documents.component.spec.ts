import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketComponent } from 'app/components/sample-components/websocket/websocket.component';
import { WebsocketService } from 'app/services/websocket.service';
import { DocumentsComponent } from './documents.component';

describe('DocumentsComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsComponent, WebsocketComponent],
      imports: [],
      providers: [WebsocketService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
