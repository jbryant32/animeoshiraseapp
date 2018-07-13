import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {RouterModule} from '@angular/router';
import { DetailsComponent } from './details/details.component'
import {HttpServiceService} from './http-service.service'
import {CommonModule} from '@angular/common';
import {HandleServiceWorkerEvents} from './handle-service-worker-events';
import {InTheatersDataService} from './in-theaters-data.service';
import { LeftSlidePanelComponent } from './panels/left-slide-panel/left-slide-panel.component';
import { SharedDataService } from './services/shared-data.service';
import { MovieDetailsComponent } from './panel-components/movie-details/movie-details.component';
import { TheaterInfoComponent } from './panel-components/theater-info/theater-info.component';
import { NowInTheatersComponent } from './home-subcomponents/now-in-theaters/now-in-theaters.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LeftSlidePanelComponent,
    MovieDetailsComponent,
    TheaterInfoComponent,
    NowInTheatersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
    } 

    ])
  ],
  providers: [HttpServiceService,HandleServiceWorkerEvents,
    ,InTheatersDataService,SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
