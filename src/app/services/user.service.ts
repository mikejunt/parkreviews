import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Actions from '../store/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {}

  login(username, password){
    
    // let loginattempt = (obj => obj.username === username && obj.password === password);
    //   if (loginattempt.length === 1) {
    //     this.isLoggedIn = true;
    //     localStorage.setItem("user", username);
    //     this.router.navigate([`/user`]);
    //     }return true
    this.store.dispatch(Actions.setActiveUser({username}))
    console.log(username,password)
      }

  logout(){
    this.store.dispatch(Actions.clearActiveUser())
  }
  signup(username, password){
    let newuser = {
      username : username,
      password : password
    };
    console.log(newuser)
  }
  
}