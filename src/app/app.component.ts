import { Component, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { ArrayBuffer } from '@angular/http/src/static_request';
import { Router } from '@angular/router';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { User } from './datamodel/user';
import { UserService } from './services/user.service';

// import 'jquery';
// import 'semantic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['../node_modules/jquery/dist/jquery.min.js', 'assets/css/styles.css'],
})
export class AppComponent {

  title = 'Welcome to my App';

  menuItems = [
    { title: 'projects', icon: 'sun icon', link: 'projects' },
    { title: 'persons', icon: 'users icon', link: 'persons' },
    { title: 'create PDF', icon: 'pdf file outline', link: 'pdf' },
    { title: 'skills', icon: 'big loading sun icon', link: 'skills' },
    { title: 'education', icon: 'book icon', link: 'education' },
    { title: 'documents', icon: 'folder open outline icon', link: 'documents' },
  ]

  storeMenuItems = [
    { title: 'save', icon: 'save icon', callback: new EventEmitter() },
    { title: 'delete', icon: 'delete icon', callback: new EventEmitter() },
    { title: 'load', icon: 'download icon', callback: new EventEmitter() },
  ];

  // does not work since string will be not converted to a function
  storeMenuItems2 = [
    { title: 'save', icon: 'save icon', callback: this.save },
    { title: 'delete', icon: 'delete icon', callback: this.delete },
    { title: 'load', icon: 'download icon', callback: this.load },
  ];

  user: User;
  saveFunction: () => void = this.save;

  isValid(value: any): boolean {
    return value === 'test';
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    (this.storeMenuItems[0].callback as EventEmitter<string>).asObservable.bind(this.save);
    (this.storeMenuItems[0].callback as EventEmitter<string>).subscribe((e) => { console.log('bla') });
    this.getUser();

    if (typeof (Storage) !== 'undefined') {
      // OK
      // localStorage.setItem('myKey', JSON.stringify({ v1: 'bla', v2: 'blub' }));
      // console.log('myKey', localStorage.getItem('myKey'));
      // console.log('test', JSON.parse(localStorage.getItem('myKey')));
    } else {
      this.router.navigate(['error', 'storage']);
    }

  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log('Hello' + this.user.profileImage);
    }, (error) => console.log('Nothing' + error));
  }
  // event: Event
  save(): void {
    // console.log('save');
    this.createKey2();
    this.createKey();
    // (event[1] as Renderer2).setStyle(event[0].target, 'backgroundColor', 'green');
    window.crypto.subtle.generateKey(
      {
        name: 'AES-CBC',
        length: 256,
      },
      false,
      ['encrypt', 'decrypt'],
    ).then((key) => {
      // x: BufferSource = {};
      // window.crypto.subtle.encrypt(key, buffer);
      console.log(key);
    });

  }
  load(): void {
    console.log('load');
   }
  delete(): void {
    localStorage.clear();
    console.log('delete');
   }

  onClick(event: Event): void {
    console.log('onclick', event[0].target, event[2]);
    (event[1] as Renderer2).setStyle(event[0].target, 'backgroundColor', 'yellow');
  }


  stringToArrayBuffer(text: string): Uint8Array {
    return new Uint8Array([207, 240, 232, 226, 229, 242, 44, 32, 236, 232]);
  }
  arrayBufferToHexString(buffer: ArrayBuffer): string {
    return 'bla';
  }

  createKey2(): CryptoKey {
    return;

  }

  createKey(): void {
    const saltString = 'Pick anything you want. This isn\'t secret.';
    const iterations = 1000;
    const hash = 'SHA-256';
    const passwordString = 'pw123';
    // var passwordString = document.getElementById("password").value;

    // First, create a PBKDF2 "key" containing the password
    if (!('TextEncoder' in window)) {
      alert('Sorry, this browser does not support TextEncoder...');
    }

    // let win1251decoder = new TextDecoder('windows-1251');
    // var enc = new TextEncoder("utf-8");
    // console.log(enc.encode("This is a string converted to a Uint8Array"));
    window.crypto.subtle.importKey(
      'raw',
      this.stringToArrayBuffer(passwordString),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']).
      // Derive a key from the password
      then((baseKey) => {
        return window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: this.stringToArrayBuffer(saltString),
            iterations,
            hash,
          },
          baseKey,
          { name: 'AES-GCM', length: 256 }, // Key we want
          true,                               // Extrable
          ['encrypt', 'decrypt'],     // For new key
        );
      }).
      // Export it so we can display it
      then((aesKey) => {
        return window.crypto.subtle.exportKey('raw', aesKey);
      }).
      // Display it in hex format
      then((keyBytes) => {
        const hexKey = this.arrayBufferToHexString(keyBytes);
        document.getElementById('aes-key').innerText = hexKey;
      });
    // catch(function (err) {
    //   alert("Key derivation failed: " + err.message);
    // });

  }
}

// tslint:disable-next-line:max-classes-per-file
@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  @Input() highlightColor: string;
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'red';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  // tslint:disable-next-line:member-ordering
  private backgroundColor = 'white';
  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    this.backgroundColor = 'yellow';
  }
}
