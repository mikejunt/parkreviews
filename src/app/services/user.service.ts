import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { first } from 'rxjs/operators'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDB: AngularFirestoreCollection<any> = this.db.collection('users')
  constructor(private router: Router, private store: Store<AppState>, private db: AngularFirestore, 
  private data: DataService) { }

  login(username, password) {
    this.data.dataQuery("users", "username", "==", username).pipe(first()).subscribe(res => {
      if (res.length != 1) { console.log("No user with that name"); return false }
      if (res["password"] != password) { console.log("Password doesn't match"); return false }
      let activeuser = {id: res["id"], username: res["username"], zipcode: "68134"}
      this.store.dispatch(Actions.setActiveUser({ activeuser }))
      this.router.navigate(['/newreview'])
    })
  }

  logout() {
    this.store.dispatch(Actions.clearActiveUser())
  }

  signup(username, password) {
    this.data.dataQuery('users', 'username', '==', username).pipe(first()).subscribe(res => {
      console.log(res)
      if (res.length != 0) { console.log("Duplicate Username"); return false }
      else {
        const user = { username: username, password: password }
        this.data.dataSave('users',user)
        console.log(user, "From signup function")
        return true
      }
    })
  }

}