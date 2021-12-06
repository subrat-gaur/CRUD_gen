import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftSearchComponent } from './aircraft-search/aircraft-search.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftDetailsComponent } from './aircraft-details/aircraft-details.component';
import { AircraftShellComponent } from './aircraft-shell/aircraft-shell.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AircraftComponentStore } from './aircraft-store';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AircraftSearchComponent,
    AircraftListComponent,
    AircraftDetailsComponent,
    AircraftShellComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule, MatInputModule, MatTooltipModule, MatButtonModule,MatDividerModule, MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AircraftRoutingModule
  ],
  providers: [AircraftComponentStore],
})
export class AircraftModule { }
