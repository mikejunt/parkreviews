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
  activeusername$: Observable<string>
  activeuserid$: Observable<string>


  parkreview = {
    authorid: "",
    authorname: "",
    parkid: "",
    trails: false,
    playground: false,
    pool: false,
    volleyball: false,
    rating: "3",
    comments: ""
  }

  constructor(private parks: ParksService, private reviews: ReviewService, private store: Store<AppState>) {
    this.selectedpark$ = this.store.select(Selectors.viewSelectedPark)
    this.selectedpark$.subscribe(res => this.parkreview.parkid = res)
    this.activeusername$ = this.store.select(Selectors.viewActiveUsername)
    this.activeusername$.subscribe(res => this.parkreview.authorname = res)
    this.activeuserid$ = this.store.select(Selectors.viewActiveUserID)
    this.activeuserid$.subscribe(res => this.parkreview.authorid = res)
   }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.reviews.postNewReview(this.parkreview)
  }

}
