import { Component } from '@angular/core';

@Component({
  selector: 'g-maps',
  templateUrl: './g-maps.component.html',
  styleUrls: ['./g-maps.component.css']
})
export class GMapsComponent {
  lat: number = 17.3850;
  lng: number = 78.4867;
  constructor() { }
  onChoseLocation($event){
    console.log(event);
  }
}
