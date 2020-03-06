import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: AngularFirestoreCollection<any>
  users$: Observable<any[]>
  user
  username: string = ""
  loginsearch = this.db.collection('users', ref => ref.where('username', '==', this.username))
 

  constructor(private router: Router, private store: Store<AppState>, private db: AngularFirestore) {
    this.userList = this.db.collection('users')
    this.users$ = this.userList.valueChanges()
    this.users$.subscribe(res => {this.user = res;console.log(res, "from observable")})
  }

  login(username, password){
    let loginattempt
    this.loginsearch.get().subscribe(res => loginattempt = res)
    console.log(this.loginsearch, loginattempt, 'returned by loginattempt')
    this.store.dispatch(Actions.setActiveUser({username}))
    console.log(username,password)
      }

  logout(){
    this.store.dispatch(Actions.clearActiveUser())
  }

  signup(username, password){
    const id = this.db.createId()
    const user = {id: id, username: username, password: password}
    this.userList.doc(id).set(user)
    console.log(user, "From signup function")
  }
  
}