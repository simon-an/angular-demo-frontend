import { Component, OnInit } from '@angular/core';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {

  user: User;
  private items = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUser();

  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => this.user = user);
  }
}
