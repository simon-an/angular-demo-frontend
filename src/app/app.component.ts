import { Component } from '@angular/core';
import { User } from 'app/datamodel/user';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

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

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log('Hello' + this.user.profileImage);
    }, (error) => console.log('Nothing' + error));
  }
}
