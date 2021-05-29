import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisajeListComponent } from './components/paisaje-list/paisaje-list.component';
import {PaisajeFormComponent} from './components/paisaje-form/paisaje-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/paisajes',
    pathMatch: 'full'

  },
  {
    path: 'paisajes',
    component: PaisajeListComponent
  },
  {
    path: 'paisajes/add',
    component: PaisajeFormComponent
  }, 
  {
    path: 'paisajes/edit/:id',
    component: PaisajeFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
