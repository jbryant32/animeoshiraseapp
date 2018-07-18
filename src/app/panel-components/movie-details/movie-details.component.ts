import { Component, OnInit, ViewChild } from '@angular/core';
import { BottomPanelComponent } from '../../panels/bottom-panel/bottom-panel.component';
import { PanelEventHandlerService } from '../../services/panel-event-handler.service';
import { TheaterInfoComponent } from '../theater-info/theater-info.component';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   constructor(private panelEvents:PanelEventHandlerService ,private sharedData:SharedDataService) { }

  ngOnInit() {
  }
  ngAfterViewInit(){this.initView()}
  //call when view needs to be open
  private initView() {
    var selectedMovie = this.sharedData.getSelectedMovie();
    var showTimesContainer = document.getElementById("showtimes-container");
    var youTubeIframe = document.getElementById("youtube-trailer");
    var movieSummaryParagraph = document.getElementById("movie-details-summary").getElementsByTagName("p")[0]

    //reset innhtml first for showtimes
    showTimesContainer.innerHTML = "";
    //set link for youtube from selected movie object
    youTubeIframe.setAttribute("src", `https://www.youtube.com/embed/${selectedMovie["trailer"]}`);
    //set summary info
    movieSummaryParagraph.innerText = selectedMovie["overview"];
    //set the inner text with the  movie showtimes 
    selectedMovie["showings"].forEach((showing) => {
      var elem = document.createElement("div");
      elem.innerText = showing;

      //attach showtimes
      showTimesContainer.appendChild(elem)
    })

    //show thedetails view
    document.getElementById("movie-details").style.display = "inherit";

  }
  //open iframe with theater url
  openTheaterUrl(e) {
    //this.bottomPanel.openPanel("theater");
    this.panelEvents.openPanelView(TheaterInfoComponent,BottomPanelComponent);
  }

  //take care of any closing actions here 
  //stops youtube video 
  //closes bottom panel if open
  public onClose() {
  
    if('theater')
    document.getElementById("youtube-trailer")
      .setAttribute("src", "");
  }
}
