import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedRouteModule } from './logged.route';
import { AppComponent } from '../app.component';
import { MinhasAcoesComponent } from './minhas-acoes/minhas-acoes.component';
import { SendTokensComponent } from './send-tokens/send-tokens.component';
import { TokenSendConfirmationComponent } from './send-tokens/token-send-confirmation/token-send-confirmation.component';


@NgModule({
  declarations: [
    LoggedComponent,
    MapaComponent,
    MinhasAcoesComponent,
    SendTokensComponent,
    TokenSendConfirmationComponent,
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
