import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
              private fb : FormBuilder,
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

  _AircraftSearchForm = this.fb.group({

    registrationNumber : [null],
    liveryCode:[null],
    serialNumber:[null],
  });

  SearchAircraft() {
    console.log(this._AircraftSearchForm.value);
    const SearchFormValues  = this._AircraftSearchForm.value as AircraftSearch;
    this._aircraftComponentStore.loadAircrafts((this.aircraftService.searchAircrafts(SearchFormValues ))) ;
  }
}


