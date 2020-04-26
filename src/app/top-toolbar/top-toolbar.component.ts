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

  user: User;

  constructor(
    private router: Router,
    public loginValidationBar: MatSnackBar,
    private auth: AuthService
  ) { 
    this.user = auth.currentUser();
  }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login']).then(() => {
      this.loginValidationBar.open("You are logged out", "Ok", {
        duration: 3000,
      });
    });

  }

}
