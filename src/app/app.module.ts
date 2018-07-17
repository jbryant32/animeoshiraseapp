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
import { ComingSoonComponent } from './home-subcomponents/coming-soon/coming-soon.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './account-subcomponents/login/login.component';
import { CreateAccountComponent } from './account-subcomponents/create-account/create-account.component';
import { PanelEventHandlerComponent } from './services/panel-event-handler/panel-event-handler.component';
import { PanelEventHandlerService } from './services/panel-event-handler.service';
 

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
     BottomPanelComponent,
    ComingSoonComponent,
    AccountComponent,
    MainComponent,
    LoginComponent,
    CreateAccountComponent,
    PanelEventHandlerComponent,
    
  
     
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    
    CustomModulesModule,
    
    RouterModule.forRoot([
      {
        path: 'main',
        component: MainComponent
      },
      // {
      //   path: 'home',
      //   component: HomeComponent
      // },
      // {
      //   path:'account',
      //   component:AccountComponent
      // },
      {
        path: 'iphoneinstall',
        component: IphoneInstallScreenComponent
      },  {

        path: 'androidinstall',
        component: AndroidInstallScreenComponent
      }

    ])
  ],
  providers:[PanelEventHandlerService],
  entryComponents:[BottomPanelComponent, TheaterInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
