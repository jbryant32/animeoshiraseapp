import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HomePanelViews } from '../home-panel-views';
import { HandlePanelSwitching } from "../handle-panel-switching";
import {HandleServiceWorkerEvents} from '../handle-service-worker-events'
import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Movies: [Object];
  private homepanelviews;
  private panelswitcher;
  private selectedId;
  constructor(private ApiCaller: HttpServiceService,private serviceWorkerEvents:HandleServiceWorkerEvents) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ApiCaller.getAll((movies: [Object]) => {
      this.Movies = movies;
    });
    this.homepanelviews = new HomePanelViews();
    this.panelswitcher = new HandlePanelSwitching(this.homepanelviews)
  }
  public openDetails(e) {
    this.selectedId = e.target.parentElement.id;
    var movieSrc;
    this.Movies.forEach((movie) => {
      console.log(movie);
      if (movie["id"]+"" === this.selectedId) {
        movieSrc = movie["trailer"];
        console.log(movieSrc);
      }

    })
    console.log(e.target.parentElement.id);
    this.panelswitcher.openPanel("details");
    document.getElementById("youtube-trailer").setAttribute("src", `https://www.youtube.com/embed/${movieSrc}`)

  }
  public closeDetails() {
    this.panelswitcher.closeDetails();
  }
}
