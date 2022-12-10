import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent },
    ]
  },
  {
    path: 'logged',
    loadChildren: () => 
      import('./logged/logged.module')
        .then(m => m.LoggedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
