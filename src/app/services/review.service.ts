import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  postNewReview(review: Object) {
    console.log("ParkService Recieved New Review", review)
  }
}
