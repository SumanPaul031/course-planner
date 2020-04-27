import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../users/user';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toolbarTitle = 'CP2';
  users: Observable<User[]>;
  // users: User[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.users = this.db.list('users').valueChanges() as Observable<User[]>;

    // this.db.list('users').valueChanges().subscribe((users) => {
    //   this.users = users as User[];
    // });
  }

}
