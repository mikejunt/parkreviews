import { Component, OnInit } from '@angular/core';
import { ParksService } from '../services/parks.service';
import { ReviewService } from '../services/review.service';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import * as Selectors from '../store/selectors'

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {
  selectedpark$: Observable<string>
  selectedpark: string;

  parkreview = {
    chosenpark: "",
    trails: false,
    playground: false,
    pool: false,
    volleyball: false,
    rating: "3",
    comments: ""
  }

  constructor(private parks: ParksService, private reviews: ReviewService, private store: Store<AppState>) {
    this.selectedpark$ = this.store.select(Selectors.viewSelectedPark)
    this.selectedpark$.subscribe(res => this.parkreview.chosenpark = res)
   }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.reviews.postNewReview(this.parkreview)
  }

}
