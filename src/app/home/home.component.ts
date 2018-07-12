import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HomePanelViews } from '../home-panel-views';
import { HandlePanelSwitching } from "../handle-panel-switching";
import { HandleServiceWorkerEvents } from '../handle-service-worker-events'
import * as $ from "jquery";
import { InTheatersDataService } from '../in-theaters-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Movies: [Object];
  public Intheaters: Object[];

  private selectedId;
  constructor(private ApiCaller: HttpServiceService,
    private serviceWorkerEvents: HandleServiceWorkerEvents,
    private homepanelviews: HomePanelViews,
    private panelswitcher: HandlePanelSwitching,
    private inTheatersService:InTheatersDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    this.ApiCaller.getAll((movies: [Object]) => {
      this.Movies = movies;
      this.homepanelviews.setMovies(this.Movies);
      this.Intheaters = this.inTheatersService.getInTheaters(this.Movies);
    });

  }
  //event run on dom  when user selects a movie  
  public openDetails(e) {
    this.homepanelviews.openPanel("details",e.target.parentElement.id);
    
  }
  public closeDetails() {
    this.panelswitcher.closePanel();
  }
}
