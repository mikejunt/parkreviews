import { Component, OnInit } from '@angular/core';
import { ParksService } from '../services/parks.service';
import { Park } from '../interfaces/parks.interface';

@Component({
  selector: 'app-park-select',
  templateUrl: './park-select.component.html',
  styleUrls: ['./park-select.component.scss']
})
export class ParkSelectComponent implements OnInit {
  parklist: Park[] = this.parks.parks
  parkchoice: string
  constructor(private parks: ParksService) { }

  ngOnInit(): void {
  }

}
