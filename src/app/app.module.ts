import { BrowserModule,DomSanitizer } from '@angular/platform-browser';
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
import { IphoneInstallScreenComponent } from './iphone-install-screen/iphone-install-screen.component';
import { AndroidInstallScreenComponent } from './android-install-screen/android-install-screen.component';
import { BottomPanelComponent } from './panels/bottom-panel/bottom-panel.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSlidePanelComponent,
    MovieDetailsComponent,
    TheaterInfoComponent,
    NowInTheatersComponent,
    IphoneInstallScreenComponent,
    AndroidInstallScreenComponent,
    BottomPanelComponent
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
      },
      {
        path: 'iphoneinstall',
        component: IphoneInstallScreenComponent
      },  {

        path: 'androidinstall',
        component: AndroidInstallScreenComponent
      }


    ])
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
