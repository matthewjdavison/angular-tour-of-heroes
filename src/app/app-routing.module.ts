import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HereosComponent } from './hereos/hereos.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'heroes', component: HereosComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
