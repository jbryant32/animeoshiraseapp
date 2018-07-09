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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
    },
    {
      path:'details',
      component:DetailsComponent
  }

    ])
  ],
  providers: [HttpServiceService,HandleServiceWorkerEvents],
  bootstrap: [AppComponent]
})
export class AppModule { }
