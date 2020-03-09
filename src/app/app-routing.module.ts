import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ParkSummaryComponent } from './park-summary/park-summary.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup',  component: SignupComponent},
  {path: 'newreview', component: NewReviewComponent},
  {path: 'parkreview/:id', component: ParkSummaryComponent},
  {path: '', redirectTo: 'parkreview/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
