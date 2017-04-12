import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill } from 'app/datamodel/skill';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs/Observable';

/**
 *
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {

  public form = this._fb.group({
    skillName: ['', /*Validators.required,*/ Validators.minLength(6)],
    // [ObservableAsyncValidator
    //   .create(c => this.yourServiceName.existenceValidator(c))
    //   .observe(x => //here you add any RxJs you like
    //     x.debounceTime(3000)
    //       .distinctUntilChanged())
    //   .asValidator()] //finally issues a subscribe and returns the validator function
  });

  private user: User;
  initValues = { first: 'Nancy', last: 'Drew', skillName: '' };

  /**
   *
   * @param userService
   * @param _fb
   * @param router
   */
  constructor(private userService: UserService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getUser();
    Observable.of(this.user.skills).subscribe((skills) => console.log('changes: ' + skills))
  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => this.user = user);
  }

  addSkillFG(): void {
    if (this.form.dirty && this.form.valid) {
      if (this.user.skills.find((skill) => skill.name === this.form.value.skillName)) {
        console.log('skill exists' + this.form.value.skillName);
      } else {
        this.user.skills.push(new Skill(this.form.value.skillName));
        // this.user.skills = this.user.skills.slice();
        // alert(`Name: ${this.myForm.value.skillName}`);
        // this.router.navigate['skills'];
        console.log('new skill' + this.user.skills.length);
      }
    }
  }

  addSkill(form2: NgForm): void {
    console.log(form2.value.mygroup.skillName);
    if (form2.dirty && form2.valid) {
      if (this.user.skills.find((skill) => skill.name === form2.value.mygroup.skillName)) {
        console.log('skill exists' + form2.value.mygroup.skillName);
      } else {
        this.user.skills.push(new Skill(form2.value.mygroup.skillName));
        // this.user.skills = this.user.skills.slice();
        // alert(`Name: ${this.myForm.value.skillName}`);
        // this.router.navigate['skills'];
        console.log('new skill' + this.user.skills.length);
      }
    }
  }

}
