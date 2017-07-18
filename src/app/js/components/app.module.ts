import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {HomeHeaderComponent} from './home-header.component';
import {CoupleComponent} from './couple.component';
import {RSVPComponent} from './rsvp.component';
import {ScheduleComponent} from './schedule.component';
import {CountdownComponent} from './countdown.component';
import {GuestsComponent} from './guests.component';
import {GuestService} from './guest.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroesComponent} from './heroes.component'; // <-- NgModel lives here



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    CoupleComponent,
    RSVPComponent,
    ScheduleComponent,
    CountdownComponent,
    GuestsComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    GuestService
  ]
})
export class AppModule { }
