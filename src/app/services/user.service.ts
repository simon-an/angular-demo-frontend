import { Injectable } from '@angular/core';
import { Company } from 'app/datamodel/company';
import { Skill } from 'app/datamodel/skill';
import { User } from 'app/datamodel/user';
import { Observable } from 'rxjs/Observable';
// import { USERS } from './mock-users';

@Injectable()
export class UserService {

  user: User = new User();

  constructor() {

    this.user.email = 'simon@nomisimon.eu';
    this.user.firstName = 'Simon';
    this.user.lastName = '';
    this.user.rating = 3;
    this.user.profileImage = 'http://semantic-ui.com/images/avatar2/large/kristy.png';
    this.user.skills = [new Skill('java'), new Skill('angular2')];
    this.user.skills[0].image = 'http://semantic-ui.com/images/avatar2/large/kristy.png';
  }

  getUser(): Observable<User> {
    // return this.user;
    return Observable.of(this.user);
  }

  // getUser(): User {
  //   return this.user;
  // }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }
}
