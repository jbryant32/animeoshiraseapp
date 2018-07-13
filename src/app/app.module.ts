import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomModulesModule } from './mymodules/custom-modules/custom-modules.module'
import { LeftSlidePanelComponent } from './panels/left-slide-panel/left-slide-panel.component';
import { MovieDetailsComponent } from './panel-components/movie-details/movie-details.component';
import { TheaterInfoComponent } from './panel-components/theater-info/theater-info.component';
import { NowInTheatersComponent } from './home-subcomponents/now-in-theaters/now-in-theaters.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSlidePanelComponent,
    MovieDetailsComponent,
    TheaterInfoComponent,
    NowInTheatersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    CustomModulesModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }


    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
