import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-park-summary',
  templateUrl: './park-summary.component.html',
  styleUrls: ['./park-summary.component.scss']
})




export class ParkSummaryComponent implements OnInit {

  
  constructor(private reviewService: ReviewService, private actr: ActivatedRoute) { }

  log(){
    console.log(this.reviews);
  }


  reviews: Array<any>;

  ngOnInit() {
    console.log(this.actr.snapshot.params.id);
    this.reviewService.reviewQuery('parkid', '==', `${this.actr.snapshot.params.id}`).subscribe(data => {console.log(data);this.reviews = data});
  }

}










//inject service and activated route//define observable variable(review$ and the variable that holds the data that comes from  observable)