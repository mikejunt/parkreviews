import { Component, OnInit } from '@angular/core';
import { ParksService } from '../services/parks.service';
import { Park } from '../interfaces/parks.interface';
import * as Actions from '../store/actions'
import { AppState } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-park-select',
  templateUrl: './park-select.component.html',
  styleUrls: ['./park-select.component.scss']
})
export class ParkSelectComponent implements OnInit {
  parklist: Park[] = this.parks.parks
  parkselect: string
  
  constructor(private parks: ParksService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

 logIt(val) {
   this.store.dispatch(Actions.setSelectedPark({parkid: val}))
 }

}
