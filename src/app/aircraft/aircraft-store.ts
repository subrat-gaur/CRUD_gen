import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { tap } from "rxjs/operators";
import { Aircraft } from "./aircraft-definition";

export interface AircraftComponentsState {
  Aircrafts: Aircraft[];
  selectedid : number| undefined;
  editedAircraft : Aircraft |undefined;
}

const defaultState: AircraftComponentsState = {
  Aircrafts: [],
  selectedid : undefined,
  editedAircraft :undefined,
};

@Injectable()
export class AircraftComponentStore extends ComponentStore<AircraftComponentsState> {

  constructor() {
    super(defaultState);
  }

  //*********select  */

  readonly Aircrafts$ = this.select(({ Aircrafts }) => Aircrafts);

  readonly SelectedAircraftId$ = this.select(({selectedid})=>selectedid);

  readonly editedAircraft$ = this.select(({ editedAircraft }) => editedAircraft).pipe(
    tap((_aircraft) => console.log('editedAircraft$', _aircraft)));

  //*********updaters  */

  readonly loadAircrafts = this.updater((state, Aircrafts: Aircraft[] | null) => ({
    ...state, Aircrafts: Aircrafts || [] }));

  readonly SelectAircraft = this.updater((state, _selectAircraft: number)  => ({
    ...state, selectedid: _selectAircraft }));

  readonly setEditedPerson = this.updater((state, editedAircraft: Aircraft | undefined) => ({
    ...state, editedAircraft }));

}
