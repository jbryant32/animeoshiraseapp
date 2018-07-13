import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HandleServiceWorkerEvents } from '../handle-service-worker-events'
import * as $ from "jquery";
import { InTheatersDataService } from '../in-theaters-data.service';
import { LeftSlidePanelComponent } from '../panels/left-slide-panel/left-slide-panel.component';
import { SharedDataService } from '../services/shared-data.service';
import { NowInTheatersComponent } from '../home-subcomponents/now-in-theaters/now-in-theaters.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Movies: Object[];
  public Intheaters: Object[];
  public selectedMovie: Object;
  
  @ViewChild(LeftSlidePanelComponent) leftPanel: LeftSlidePanelComponent;
  @ViewChild(NowInTheatersComponent) nowInTheaters:NowInTheatersComponent;
  constructor(private httpService: HttpServiceService,
    private sharedData: SharedDataService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.httpService.Init();
    this.httpService.fetchMoviesCallBack = () => {
      this.Movies = this.sharedData.getMovies();
      console.log(this.Movies);
    }
  }
  public slideInNowInTheaters(){
    this.nowInTheaters.Init();
    console.log("open now in theaters");
  }
  //event run on dom  when user selects a movie  
  public openDetails(e) {
    this.sharedData.setSelectedMovie(e.target.parentElement.id);
    this.leftPanel.openPanel("details");

  }
  public closeDetails() {
    this.leftPanel.closePanel();
  }
}
