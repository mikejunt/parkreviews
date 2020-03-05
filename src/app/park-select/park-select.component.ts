import { Component, OnInit } from '@angular/core';
import { ParksService } from '../services/parks.service';
import { Park } from '../interfaces/parks.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-park-select',
  templateUrl: './park-select.component.html',
  styleUrls: ['./park-select.component.scss']
})
export class ParkSelectComponent implements OnInit {
  parklist: Park[] = this.parks.parks
  parkselect: string = "1"
  
  constructor(private parks: ParksService) { }

  ngOnInit(): void {
  }

 logIt() {
   console.log("This function would update the store with id of selected park:", this.parkselect)
 }

}
