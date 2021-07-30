import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { observable } from 'rxjs';
import { Aircraft, AircraftSearch } from '../aircraft-definition';
import { AircraftComponentStore } from '../aircraft-store';
import { AircraftService } from '../aircraft.service';


@Component({
  selector: 'app-aircraft-search',
  templateUrl: './aircraft-search.component.html',
  styleUrls: ['./aircraft-search.component.css']
})
export class AircraftSearchComponent implements OnInit {



  constructor (
              private aircraftService: AircraftService,
              private readonly _aircraftComponentStore : AircraftComponentStore
              ) {

  }

  columnsToDisplay = Object.keys(new AircraftSearch());

  ngOnInit() {
              this.aircraftService.getAllAircrafts().subscribe({
                next: (aircrafts) => {
                  this._aircraftComponentStore.loadAircrafts(aircrafts);
                },
              });

  }

}
