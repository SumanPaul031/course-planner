import { Injectable } from '@angular/core';
import { User } from "../users/user";
import { Observable, of, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  authState: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  login(email, password): Observable<any>{
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  currentUser(): Observable<any>{
    return this.afAuth.authState;
  }

  logout(): Observable<void>{
    // return localStorage.removeItem('currentUser');
    return from(this.afAuth.signOut());
  }
}
