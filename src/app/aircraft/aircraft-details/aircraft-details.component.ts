import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Aircraft, AircraftClass} from '../aircraft-definition';
import { FormBuilder, Validators } from '@angular/forms';
import { AircraftService } from '../aircraft.service';
import { AircraftComponentStore } from '../aircraft-store';

@Component({
  selector: 'app-aircraft-details',
  templateUrl: './aircraft-details.component.html',
  styleUrls: ['./aircraft-details.component.css']
})
export class AircraftDetailsComponent implements OnInit {


  constructor(
                private aircraftService: AircraftService,
                private readonly _AircraftComponentStore :  AircraftComponentStore
    ) { }

  columnsToDisplay = Object.keys(new AircraftClass());

  ngOnInit(): void {

  }

}
