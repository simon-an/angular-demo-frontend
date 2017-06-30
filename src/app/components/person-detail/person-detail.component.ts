import { Component, OnInit } from '@angular/core';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user: User) => this.user = user);
  }

}
