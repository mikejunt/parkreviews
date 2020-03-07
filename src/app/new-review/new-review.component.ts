import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import * as Selectors from '../store/selectors'
import { DataService } from '../services/data.service';

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

  constructor(private data: DataService, private store: Store<AppState>) {
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
    this.data.dataSave('reviews', this.parkreview)
  }

}
