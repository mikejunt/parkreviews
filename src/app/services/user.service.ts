import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDB: AngularFirestoreCollection<any> = this.db.collection('users')
  constructor(private router: Router, private store: Store<AppState>, private db: AngularFirestore) {

  }

  userQuery(key: string, operator: firebase.firestore.WhereFilterOp, value: string) {
    let dbquery: AngularFirestoreCollection<any> = this.db.collection('users', (ref) => ref.where(key, operator, value))
    let dbquery$ = dbquery.snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data();
        const id = x.payload.doc.id;
        return { id, ...data }
      })
    }))
    // let queryresult
    // dbquery$.subscribe(res => {queryresult = res;console.log(res, "from observable")})
    // return queryresult
    return dbquery$
  }

  login(username, password) {
    this.userQuery("username", "==", username).pipe(first()).subscribe(res => {
      if (res.length != 1) { console.log("No user with that name"); return false }
      // pwd hash?
      if (res["password"] != password) { console.log("Password doesn't match"); return false }
      this.store.dispatch(Actions.setActiveUser({ username }))
      this.router.navigate(['/newreview'])
    })
  }

  logout() {
    this.store.dispatch(Actions.clearActiveUser())
  }

  signup(username, password) {
    this.userQuery("username", "==", username).pipe(first()).subscribe(res => {
      console.log(res)
      if (res.length != 0) { console.log("Duplicate Username"); return false }
      // hash password here
      else {
        const id = this.db.createId()
        const user = { id: id, username: username, password: password }
        this.userDB.doc(id).set(user)
        console.log(user, "From signup function")
        return true
      }
    })
  }

}