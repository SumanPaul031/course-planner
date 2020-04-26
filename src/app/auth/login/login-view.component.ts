import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user : any;

  @Input()
  signInError : string;

  @Input()
  tryingToLogIn: boolean;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  tryLogin($event){
    this.tryLoginEmitter.emit(this.user);
  }

  constructor() { 
    this.user = {};
  }

  ngOnInit(): void {
  }

}
