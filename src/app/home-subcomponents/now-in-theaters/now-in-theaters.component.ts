import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { HomeComponent } from '../../home/home.component';
import { LeftSlidePanelComponent } from '../../panels/left-slide-panel/left-slide-panel.component';

@Component({
  selector: 'app-now-in-theaters',
  templateUrl: './now-in-theaters.component.html',
  styleUrls: ['./now-in-theaters.component.css']
})
export class NowInTheatersComponent implements OnInit {

  public inTheaters: Object[] = [];
  public noMoviesCurrentlyPlaying: Boolean;
  
  public leftPanel: LeftSlidePanelComponent;
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
  }

  public Init(leftPanel) {
    this.leftPanel = leftPanel;
    this.inTheaters = [];
    this.sharedData.getMovies().forEach((movie) => {

      var currentDate = new Date();
      var currentDay = currentDate.getDay();
      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var movieMonth = parseInt(movie["showings"][0].split("/")[0]);
      console.log("month " + movieMonth);
      console.log("current month " + currentMonth + 1);
      if (movieMonth === currentMonth + 1)
        this.inTheaters.push(movie);

    });
    if (this.inTheaters.length === 0) {
      console.log("no movies available")
    }
    console.log(this.inTheaters);
  }
  public openDetails(e) {
    console.log(e.target.parentElement.id)
    this.sharedData.setSelectedMovie(e.target.parentElement.id);
    this.leftPanel.openPanel("details");

  }
}
