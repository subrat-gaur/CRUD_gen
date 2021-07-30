import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftShellComponent } from './aircraft-shell/aircraft-shell.component';

const routes: Routes = [
  { path: 'aircrafts', component: AircraftShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AircraftRoutingModule { }
