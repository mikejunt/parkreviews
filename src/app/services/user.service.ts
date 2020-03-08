import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { DataService } from './data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public auth: AngularFireAuth, private router: Router, private store: Store<AppState>, private data: DataService) { }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      this.data.dataQuery('users', 'id','==', response.user.uid).pipe().subscribe(res => {
        let user = res[0]
        this.store.dispatch(Actions.setActiveUser({activeuser: user}))
        this.router.navigate(['newreview'])
      })
    })
  }



  logout() {
    firebase.auth().signOut();
    this.store.dispatch(Actions.clearActiveUser())
  }

  signup(username: string, email: string, password: string, zipcode?: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response=> {
      let user = {username: username, email: email, zip: zipcode }
      this.data.dataSave('users',user, response.user.uid)
      let stateuser = {id: response.user.uid, username: username, email: email, zipcode: zipcode}
      this.store.dispatch(Actions.setActiveUser({activeuser: stateuser}))
      this.router.navigate(['newreview'])
    }).catch(err=>console.log("error:",err))
  }

}