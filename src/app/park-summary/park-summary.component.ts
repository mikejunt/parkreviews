import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ParksService } from '../services/parks.service';
import * as Actions from '../store/actions';
import * as Selectors from '../store/selectors';
import { AppState } from '../store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-park-summary',
  templateUrl: './park-summary.component.html',
  styleUrls: ['./park-summary.component.scss']
})

export class ParkSummaryComponent implements OnInit {
  parkview$: Observable<string>;
  parkview: string;
  reviews: Array<any>;
  parklist

  constructor(private data: DataService, private actr: ActivatedRoute, private router: Router,
    private parks: ParksService, private store: Store<AppState>) {
    this.parklist = this.parks.parks
    this.parkview$ = this.store.select(Selectors.viewSelectedPark)
    this.parkview$.subscribe(park => this.data.dataQuery('reviews', 'parkid', '==', park)
    .subscribe(res => this.reviews = res ) 
    )}

  ngOnInit() {
    let park: string = this.actr.snapshot.params.id
    this.store.dispatch(Actions.setSelectedPark({parkid: park}))
  }


  navigate(route: string) {
    let path = route.split('/')[1]
    if (path != 'login') {this.store.dispatch(Actions.setSelectedPark({parkid:path}))}
    this.router.navigate([route])
  }

}
