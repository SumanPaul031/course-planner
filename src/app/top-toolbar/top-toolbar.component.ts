import { Component, OnInit, Input } from '@angular/core';
import { User } from "../users/user";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  @Input()
  title : string;

  user: any;

  constructor(
    private router: Router,
    public loginValidationBar: MatSnackBar,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.currentUser().subscribe(user => {
      this.user = user;
    })
  }

  logout(){
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']).then(() => {
        this.loginValidationBar.open("You are logged out", "Ok", {
          duration: 3000,
        });
      });
    });
  }

}
