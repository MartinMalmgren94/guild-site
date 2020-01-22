import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RaidComponent } from './raid/raid.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
{ path: '', component: LandingComponent },
{ path: 'info', component: InfoComponent },
{ path: 'raid', component: RaidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
