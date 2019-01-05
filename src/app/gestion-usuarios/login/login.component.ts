import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.loginService.login(username, password).subscribe(

      res => {
        const u: User = { username: username };
        this.userService.setUserLoggedIn(u);

      },
      error => {
        console.error(error);
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigate(['Principal/Home']);
  }
}

