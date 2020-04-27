import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, Observable } from "rxjs";
import { delay } from 'rxjs/internal/operators';
import { AuthUser } from '../auth.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginError: string;
  request: Subscription;
  tryingToLogIn: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    public loginValidationBar: MatSnackBar
  ) {}

  login(user: AuthUser) {
    this.tryingToLogIn = true;
    if (this.request) {
      this.request.unsubscribe();
    }
    this.request = this.auth.login(user.email, user.password).pipe(delay( 1000 )).subscribe((lUser) => {
      if (lUser) {
        this.loginError = null;
        this.router.navigate(['/']).then(() => {
          this.loginValidationBar.open("You are logged in", "Ok", { duration: 3000 });
        });
      } else {
        this.loginError = "email and password was wrong";
      }
    },
    (err) => {
      console.error(err);
      this.loginError = "An error occoured during login, see error in console";
      this.tryingToLogIn = false;
    },
    () => {
      console.log("Done!");
      this.tryingToLogIn = false;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.request) {
      this.request.unsubscribe();
    }
  }

}
