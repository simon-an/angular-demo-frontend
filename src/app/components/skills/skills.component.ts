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

  initValues = { first: 'Nancy', last: 'Drew', skillName: '' };
  skills = new Array<Skill>();
  private user: User;

  /**
   *
   * @param userService
   * @param _fb
   * @param router
   */
  constructor(private userService: UserService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getUser();

    const skillString = localStorage.getItem('skills');
    if (skillString) {
      this.skills = JSON.parse(skillString);
    } else {
      this.skills = this.user.skills;
    }
    Observable.of(this.skills).subscribe(
      (skills) => console.log('changes: ' + skills),
      (error) => { console.error('', error) },
      () => { console.log('complete') },
    )

    // dataService.skills.subscribe(
    //   (skills) => console.log('changes: ' + skills),
    //   (error) => { console.error('', error) },
    //   () => { console.log('complete') },
    // );
  }

  saveSkills(): void {
    localStorage.setItem('skills', JSON.stringify(this.skills));
  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => this.user = user);
  }

  addSkillFG(): void {
    if (this.form.dirty && this.form.valid) {
      if (this.skills.find((skill) => skill.name === this.form.value.skillName)) {
        console.log('skill exists' + this.form.value.skillName);
      } else {
        // this.user.skills.push(new Skill(this.form.value.skillName));
        this.skills.push(new Skill(this.form.value.skillName));

        console.log('new skill' + this.skills.length);
        this.saveSkills();
      }
    }
  }

  addSkill(form2: NgForm): void {
    console.log(form2.value.mygroup.skillName);
    if (form2.dirty && form2.valid) {
      if (this.skills.find((skill) => skill.name === form2.value.mygroup.skillName)) {
        console.log('skill exists' + form2.value.mygroup.skillName);
      } else {
        this.skills.push(new Skill(form2.value.mygroup.skillName));
        // this.user.skills = this.user.skills.slice();
        // alert(`Name: ${this.myForm.value.skillName}`);
        // this.router.navigate['skills'];
        console.log('new skill' + this.skills.length);
        this.saveSkills();
      }
    }
  }

}
