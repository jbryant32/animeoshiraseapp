import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { HomeComponent } from '../../home/home.component';
import { SharedDataService } from '../../services/shared-data.service';
import { MovieDetailsComponent } from '../../panel-components/movie-details/movie-details.component';
@Component({
  selector: 'app-left-slide-panel',
  templateUrl: './left-slide-panel.component.html',
  styleUrls: ['./left-slide-panel.component.css']
})
export class LeftSlidePanelComponent implements OnInit {


  private movies: Object[];
  private selectedId: string;
  private defaultMovie: Object = {
    "theaterUrl": "NA",
    "poster_sm": "https://image.tmdb.org/t/p/w200",
    "poster_md": "https://image.tmdb.org/t/p/w300",
    "poster_lg": "https://image.tmdb.org/t/p/w400",
    "poster_lgx": "https://image.tmdb.org/t/p/w500",
    "backdrop_sm": "NA",
    "backdrop_lg": "NA",
    "subbed": "NA",
    "dubbed": "NA",
    "trailer": "NA",
    "overview": "NA",
    "releaseDate": "NA",
    "theatricalRelease": "NA",
    "showings": ["09/09/1999", "09/09/1999", "09/09/1999"],
    "id": "NA",
    "title": "NA"

  };
  private selectedMovie: Object;
  private showDetails: boolean;
  @ViewChild(MovieDetailsComponent) detailsView: MovieDetailsComponent;
 
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
  }
  public openPanel(show: string) {
    this.selectedMovie = this.sharedData.getSelectedMovie();
    if (show === "details") {
      console.log("open detail")
      $("#panel-main-container").animate({ "left": "0%" }, 200, () => { this.showDetailsView(); })
    }

  }
  public closePanel() {
    // this.hideDetailsView();
    console.log("close")
    $("#panel-main-container").animate({ "left": "-100%" }, 200, () => { })
  }
  private showDetailsView() {
    this.detailsView.initView(this.selectedMovie);

  }
  private hideDetailsView() {
    document.getElementById("movie-details").style.display = "none";
  }
}
