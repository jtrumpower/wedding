import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home.component';
import {RSVPComponent} from './rsvp.component';
import {ScheduleComponent} from './schedule.component';
import {GuestsComponent} from './guests.component';
import {DirectionsComponent} from './directions.component';
import {AlreadyRegisteredComponent} from './already-registered.component';
import {HotelComponent} from './hotel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'rsvp', component: RSVPComponent },
  { path: 'hotel',     component: HotelComponent },
  { path: 'schedule',     component: ScheduleComponent },
  { path: 'status',     component: AlreadyRegisteredComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'guests',     component: GuestsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
