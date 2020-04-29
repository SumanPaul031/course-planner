import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, ReplaySubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDoc: AngularFirestoreDocument<User>;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { }

  getUsers(): Observable<User[]>{
    this.db.list('users').valueChanges().subscribe(users => {
      console.log(users);
    })
    return this.db.list('users').valueChanges() as Observable<User[]>;
  }

  getUser(email: string) : Observable<User>{
    return this.db.object('users/' + email).valueChanges() as Observable<User>;
  }

  deleteUser(user : User){
    // let resultSubject = new ReplaySubject(1);
    // if(user !== undefined && user.email !== undefined){
    //   this.userDoc = this.afs.doc(`users/${user.email}`);
    //   this.userDoc.delete();
    // }
    this.userDoc = this.afs.doc(`users/${user.email}`);
    this.userDoc.delete();
  }
}
