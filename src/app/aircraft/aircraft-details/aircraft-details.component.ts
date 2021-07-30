import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Aircraft, AircraftClass} from '../aircraft-definition';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
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
                private readonly _AircraftComponentStore :  AircraftComponentStore,
                private fb : FormBuilder
    ) { }

  DisplayedAircraftId$ = this._AircraftComponentStore.SelectAircraftId;
  DisplayAircraft$ = this._AircraftComponentStore.editedAircraft$;


  _AircraftForm = this.fb.group({
    AircraftID : [null, [Validators.required]],
    RegistrationNumber : [null, [Validators.required]],
    TypeIATACode: [null, [Validators.required]],
    AircraftName: [null, [Validators.required]],
    ownershipTypeCode: [null, [Validators.required]],
    aircraftOwner: [null, [Validators.required]],
    liveryCode:[null, [Validators.required]],
    serialNumber:[null, [Validators.required]],
    engineManufacturer:[null, [Validators.required]],
    engineModel:[null, [Validators.required]],
    remarks:[null, [Validators.required]],
    AircraftWeight:[null, [Validators.required]]
  });

  ngOnInit(): void {

  }

}
