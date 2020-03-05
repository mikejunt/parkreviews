import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  

  constructor(db: AngularFirestore) { }

  ngOnInit() {
  }

  postNewReview(review: Object) {
    console.log("ParkService Recieved New Review", review)
  }
}
