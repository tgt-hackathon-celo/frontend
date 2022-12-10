import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedRouteModule } from './logged.route';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    LoggedComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    LoggedRouteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class LoggedModule { }
