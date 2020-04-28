import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  @Output()
  creatingUserEvent = new EventEmitter<boolean>();

  creatingUser: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  creatingNewUser(value){
    this.creatingUser = value;
    this.creatingUserEvent.emit(value);
  }

  onSubmit(){

  }

}
