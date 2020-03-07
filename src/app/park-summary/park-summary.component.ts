import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-park-summary',
  templateUrl: './park-summary.component.html',
  styleUrls: ['./park-summary.component.scss']
})

export class ParkSummaryComponent implements OnInit {
  reviews: Array<any>;
  
  constructor(private data: DataService, private actr: ActivatedRoute) { }

  ngOnInit() {
    let park: string = this.actr.snapshot.params.id
    console.log(park)
    this.data.dataQuery('reviews','parkid', '==', park)
    .subscribe(res => {console.log(res);this.reviews = res});
  }

}
