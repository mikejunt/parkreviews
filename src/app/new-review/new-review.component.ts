import { Component, OnInit } from '@angular/core';
import { ParksService } from '../services/parks.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  parkreview = {
    trails: false,
    playground: false,
    pool: false,
    volleyball: false,
    rating: "3",
    comments: ""
  }

  constructor(private parks: ParksService, private reviews: ReviewService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.reviews.postNewReview(this.parkreview)
  }

}
