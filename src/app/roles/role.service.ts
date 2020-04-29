import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private db: AngularFireDatabase) { }

  getRoles() : Observable<Role[]> {
    return this.db.list('roles').valueChanges() as Observable<Role[]>;
  }
}
