import { Inject, NgModule } from '@angular/core';
import { inject } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, routes],
  providers: [routes]
})
export class AppRoutingModule { }
