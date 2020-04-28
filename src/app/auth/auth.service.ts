import { Injectable } from '@angular/core';
import { User } from "../users/user";
import { Observable, of, from, ReplaySubject, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  authState: any;

  private isAuthenticated: ReplaySubject<any> = new ReplaySubject(1)

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  login(email, password): Observable<any>{
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  currentUser(): Observable<any>{
    return this.afAuth.authState;
  }

  logout(): Observable<void>{
    return from(this.afAuth.signOut());
  }
}
