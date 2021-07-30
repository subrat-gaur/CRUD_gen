import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Aircraft, AircraftClass, AircraftSearchResults} from '../aircraft-definition';
import { AircraftService } from '../aircraft.service';
import { AircraftComponentStore } from '../aircraft-store';


@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {


  dataSource : Aircraft[] = [];


  constructor(
              private aircraftService: AircraftService,
              private readonly _AircraftComponentStore :  AircraftComponentStore
              ) {


    }

  columnsToDisplay = Object.keys(new AircraftSearchResults());

  ngOnInit(): void {
      this._AircraftComponentStore.Aircrafts$.subscribe(aircr=>{this.dataSource= aircr});
    }

  clickedRows = new Set<Aircraft>();
  lastclickedrow: AircraftClass = new AircraftClass();

  RowClicked(): void
  {
    if (this.lastclickedrow)
    {
      this._AircraftComponentStore.SelectAircraftId(this.lastclickedrow.id);
    }

  }
}



