import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
import { Course } from '../../datamodel/course';
import { Education } from '../../datamodel/education';
import { Graduation, GraduationDegree, MACOS } from '../../datamodel/graduation';
import { Period } from '../../datamodel/period';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {

  user: User;
  private items = new Array<Education>();

  constructor(private userService: UserService) {

  }

  ngOnInit() {

    this.items.push(new Education());
    this.items.push(new Education());
    this.items.push(new Education());
    this.items.push(new Education());
    this.items[0].duration = new Period(new Date(2004, 11), new Date(2010, 4));
    this.items[1].duration = new Period(new Date(2004, 11), new Date(2010, 4));
    this.items[2].duration = new Period(new Date(2004, 11), new Date(2010, 4));
    this.items[3].duration = new Period(new Date(2004, 11), new Date(2010, 4));
    this.items[0].school = { name: 'Grundschule', website: 'http://google.de' }
    this.items[1].school = { name: 'Realschule', website: 'http://google.de' }
    this.items[2].school = { name: 'Fachoberschule', website: 'http://google.de' }
    this.items[3].school = { name: 'Hochschule', website: 'http://google.de' }
    this.items[3].graduation = new Graduation();
    this.items[3].graduation.degree = GraduationDegree.MASTER;
    this.items[3].graduation.macos = MACOS.SCIENCE;
    this.items[3].graduation.spezialisation = 'Informatik';
    this.items[2].courses.push(new Course('Müller Emil', 'Werken1'));
    this.items[2].courses.push(new Course('Müller Richard', 'Sticken'));
    this.items[2].courses.push(new Course('Meier Sepp', 'Boden Turnen'));
    this.items[3].courses.push(new Course('Meier Sepp', 'Boden Turnen'));



    this.getUser();

  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => this.user = user);
  }

  addEducation(form2: NgForm): void {
    console.log('schoolname' + form2.value.schoolGroup.name);
    console.log('form2', form2.value.schoolGroup);
    if (form2.dirty && form2.valid) {
      if (this.items.find((education) => education.school.name === form2.value.schoolGroup.name)) {
        console.log('school already exists' + form2.value.schoolGroup.name);
      } else {
        const e = new Education();
        e.school.name = form2.value.schoolGroup.name;
        this.items.push(e);
        console.log('new skill' + this.items.length);
        // this.saveSkills();
      }
    }
  }
}
