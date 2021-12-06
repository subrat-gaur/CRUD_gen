import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Aircraft  } from "./aircraft-definition";
import { AircraftService } from './aircraft.service';

export interface AircraftState {
  Aircrafts: Aircraft[];
  editorId: number | undefined;
  editedAircraft: Aircraft | undefined;
}

const defaultState: AircraftState = {
  Aircrafts: [],
  editorId: undefined,
  editedAircraft: undefined,
};

@Injectable()
export class AircraftComponentStore
  extends ComponentStore<AircraftState>
  implements OnDestroy {
  private _saveEditAircraft$ = new Subject<void>();
  private _subs = new Subscription();

  constructor(private readonly __AircraftApiService: AircraftService) {
    super(defaultState);

    const saveWithData$ = this._saveEditAircraft$.pipe(
      withLatestFrom(this.editedAircraft$, this.editorId$),
      switchMap(([, person, personId]) =>
        this.__AircraftApiService.SaveAircraft(personId, person)
      )
    );

    this._subs.add(
      saveWithData$.subscribe({
        next: (person) => {
          this.updateAircrat(person);

          this.clearEditedAircraft();
        },
        error: (error) => {
          console.error('An error happened while saving:', error);
        },
      })
    );
  }

  readonly Aircrafts$ = this.select(({ Aircrafts }) => Aircrafts);
  readonly editorId$ = this.select(({ editorId }) => editorId);
  readonly editedAircraft$ = this.select(({ editedAircraft }) => editedAircraft)
  // .pipe(tap((_aircraft) => console.log('editedAircraft$', _aircraft)))
  ;

  readonly loadAircrafts = this.updater((state, _aircrafts: Aircraft[] | null) => ({
    ...state,
    Aircrafts: _aircrafts || [],
  }));

  readonly setEditorId = this.updater(
    (state, editorId: number | undefined) => ({ ...state, editorId })
  );

  readonly setEditedAircraft = this.updater(
    (state, editedAircraft: Aircraft | undefined) => ({ ...state, editedAircraft })
  );

  readonly editAircraft = this.effect(
    (personId$: Observable<number | undefined>) =>
      personId$.pipe(
        withLatestFrom(this.Aircrafts$),
        tap<[number | undefined, Aircraft[]]>(([id, Aircrafts]) => {
          this.setEditorId(id);

          const personToEdit  =
            !id && id !== 0
              ? undefined
              : Aircrafts.find((_Aircraft) => _Aircraft.id === id);

          this.setEditedAircraft({...personToEdit! });
        })
      )
  );

  readonly updateAircrat = this.effect((aircraft$: Observable<Aircraft>) =>
    aircraft$.pipe(
      withLatestFrom(this.Aircrafts$),
      tap<[Aircraft, Aircraft[]]>(([_aircraft, _aircrafts]) => {
        const id = _aircraft.id;
        const index = _aircrafts.findIndex((cur) => {
          console.log('compare', cur, id, cur.id === id);
          return cur.id === id;
        });

        console.log('index', index, _aircraft, _aircrafts);

        if (index > -1) {
          const editedAircrafts = [..._aircrafts];
          editedAircrafts[index] = _aircraft;

          this.loadAircrafts(editedAircrafts);
        }
      })
    )
  );

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  cancelEditPerson() {
    this.clearEditedAircraft();
  }

  private clearEditedAircraft() {
    this.setEditorId(undefined);
    this.setEditedAircraft(undefined);
  }

  saveEditPerson() {
    this._saveEditAircraft$.next();
  }
}
