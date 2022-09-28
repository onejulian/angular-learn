import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';

const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {
    path: 'ejemplo', component: EjemploComponent
  },
  {
    path: 'directiva', component: DirectivaComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: '**', component: Pagina404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
