import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //call when view needs to be open
  public initView(selectedMovie: Object) {
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
  public onClose(){
    document.getElementById("youtube-trailer")
    .setAttribute("src","");
  }
}
