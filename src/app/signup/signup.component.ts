import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { CrossFieldMatcher } from '../shared/crossfield.matcher';
import { passwordMatchValidator } from '../shared/password-match.validator'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(4)])],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(32), Validators.minLength(6)])],
    confirm: [''],
    email: ['', Validators.compose([Validators.required, Validators.maxLength(32), Validators.minLength(3)])],
    zip: ['', Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(5)])]
  }, { validator: passwordMatchValidator })
  matcher: CrossFieldMatcher
  hide: boolean = true;
  
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  signup(e){
    e.preventDefault();

    if(this.signupForm.valid){
      this.userService.signup(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.zip);
    }
  }
  ngOnInit(): void { }
  
}

