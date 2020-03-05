import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= "parkreviews";
  users: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }
}
