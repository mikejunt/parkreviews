import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DataService } from './data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDB: AngularFirestoreCollection<any> = this.db.collection('users')
  constructor(public auth: AngularFireAuth, private router: Router, private store: Store<AppState>, private db: AngularFirestore, 
  private data: DataService) { }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      console.log(response, "from auth")
      this.data.dataQuery('users', 'id','==', response.user.uid).pipe().subscribe(res => {
        console.log(res, "from userdb")
        let user = res[0]
        this.store.dispatch(Actions.setActiveUser({activeuser: user}))
        this.router.navigate(['parkreview/1'])
      })
    })
    // this.data.dataQuery("users", "username", "==", username).pipe(first()).subscribe(res => {
    //   if (res.length != 1) { console.log("No user with that name"); return false }
    //   if (res["password"] != password) { console.log("Password doesn't match"); return false }
    //   let activeuser = {id: res["id"], username: res["username"], zipcode: "68134"}
    //   this.store.dispatch(Actions.setActiveUser({ activeuser }))
    //   this.router.navigate(['/newreview'])
    // })
    
  }



  logout() {
    firebase.auth().signOut();
    this.store.dispatch(Actions.clearActiveUser())
  }

  signup(username: string, email: string, password: string, zipcode?: string) {
    console.log (username, email, password, zipcode)
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response=> {
      let user = {username: username, email: email, zip: zipcode }
      console.log(user, "userdata sent to database")
      this.data.dataSave('users',user, response.user.uid)
      let stateuser = {id: response.user.uid, username: username, email: email, zipcode: zipcode}
      console.log(stateuser, "userdata sent to state")
      this.store.dispatch(Actions.setActiveUser({activeuser: stateuser}))
      this.router.navigate(['parkreview/1'])
    }).catch(err=>console.log("error:",err))
  }

}