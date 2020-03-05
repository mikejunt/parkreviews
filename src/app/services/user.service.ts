import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login(username, password){
    
    let loginattempt = this.currentUsers.filter(obj => obj.username === username && obj.password === password);
      if (loginattempt.length === 1) {
        this.isLoggedIn = true;
        localStorage.setItem("user", username);
        this.router.navigate([`/user`]);
        }return true
      }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  signup(username, password){
    let newuser = {
      username : username,
      password : password
    };
  }
  
}