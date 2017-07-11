import { Component, OnInit } from '@angular/core';
import { Person } from 'app/datamodel/person';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {

  persons = new Array<Person>();

  user: User;

  constructor(private userService: UserService) {
    this.persons.push(new Person());
    this.persons[0].firstName = 'Mr.';
    this.persons[0].lastName = 'X';
    this.persons[0].email = 'x@y.de'
    this.persons[0].phoneNumber = '+49089123456789';
    this.persons[0].location = 'Berlin';

    this.persons.push(new Person());
    this.persons[1].firstName = 'Ms.';
    this.persons[1].lastName = '1';
    this.persons[1].email = 'a@y.de'
    this.persons[1].phoneNumber = '+49089123456789';
    this.persons[1].location = 'Dubai';
    this.persons[1].birthDate = new Date(1983, 1, 21);

    this.persons.push(new Person());
    this.persons[2].firstName = 'Mrs.';
    this.persons[2].lastName = '2';
    this.persons[2].email = 'v@y.de'
    this.persons[2].phoneNumber = '+49089123456789';
    this.persons[2].location = 'Munich';
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user: User) => this.user = user);
  }

}
