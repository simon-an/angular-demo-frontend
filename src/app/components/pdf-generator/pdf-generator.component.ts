import { Component, OnInit } from '@angular/core';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'knowledge-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css'],
})
export class PdfGeneratorComponent implements OnInit {

  user: User;

  constructor(public userService: UserService) { }
  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

}
