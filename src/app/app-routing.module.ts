import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CompteComponent } from './compte/compte.component';
import { ZoneComponent } from './zone/zone.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'client', component: ClientComponent},
  {path: 'compte', component: CompteComponent},
  {path: 'zone', component: ZoneComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
