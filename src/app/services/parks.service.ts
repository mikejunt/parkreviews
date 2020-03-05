import { Injectable } from '@angular/core';
import { Park } from '../interfaces/parks.interface';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
parks: Park[] = [{name: "Standing Bear Lake", id: "2"}, {name: "Heartland of America Park", id:"1"}, {name: "Benson Park", id: "3"}]

  constructor() { }
}
