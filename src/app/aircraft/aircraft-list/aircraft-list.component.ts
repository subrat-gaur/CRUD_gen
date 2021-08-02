import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Aircraft, AircraftClass, AircraftSearchResults} from '../aircraft-definition';
import { AircraftService } from '../aircraft.service';
import { AircraftComponentStore } from '../aircraft-store';


@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  constructor(private aircraftService: AircraftService,
              private readonly _AircraftComponentStore :  AircraftComponentStore) {}

  Aircraft$ = this._AircraftComponentStore.Aircrafts$;
  columnsToDisplay = Object.keys(new AircraftSearchResults());
  clickedRows = new Set<Aircraft>();
  lastclickedrow: AircraftClass = new AircraftClass();

  ngOnInit(): void {}

  RowClicked(): void
  {
    if (this.lastclickedrow)
    {
      this._AircraftComponentStore.setEditorId(this.lastclickedrow.id);
      this._AircraftComponentStore.setEditedAircraft(this.lastclickedrow);
      console.log(this.lastclickedrow);

    }

  }
}



