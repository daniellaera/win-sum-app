import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    outlet: 'one'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
