import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';

import { LoggedComponent } from './logged.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MinhasAcoesComponent } from './minhas-acoes/minhas-acoes.component';
import {SendTokensComponent} from "./send-tokens/send-tokens.component";

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: 'map',
        component: MapaComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'actions',
        component: MinhasAcoesComponent,
      },
      {
        path: 'send-tokens',
        component: SendTokensComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedRouteModule { }
