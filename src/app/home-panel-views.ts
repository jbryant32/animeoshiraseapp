import { Injectable, OnInit } from "../../node_modules/@angular/core";
import * as $ from "jquery";

@Injectable()
export class HomePanelViews   {
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
    constructor() {
        $(document).ready(() => {
            document.body.appendChild(this.init());
            document.getElementById("nav-button").addEventListener("click", () => { this.closePanel() });
        })
    }
    //html for various panels releated to home 

    //the main base panel is attached to

    private init(): Node {
        var view = document.createElement("div");
        view.setAttribute("id", "panel-main-container");
        view.setAttribute("class", "panel-main-container")
        var html =
            ` <div id="panel-nav-container" class="panel-navigation-top-container">
                <div id="nav-button" class="nav-button-container" (click)="closePanel()">
                <i class="fas fa-chevron-left"></i>
                </div>
                <div id="panel-text-header" class="panel-navigation-top-text-header">
                </div>
            </div>
         `
        view.innerHTML = html;
        view.appendChild(this.detailsView())
        return view
    }
    public setMovies(movies: Object[]) {
        this.movies = movies;
    }
    //sets selected id and gets the movie from an array
    private setCurrentSelectedId(id: string) {
        this.selectedId = id;

        this.movies.forEach((movie) => {
            if (movie["id"] + "" === this.selectedId) {
                // movieSrc = movie["trailer"];
                // movieSummary = movie["overview"]
                // movieShowings = movie["showings"]
                console.log(movie);
                console.log("movie slected");
                this.selectedMovie = movie;
                return movie
            }


        });
    }
    
    public openPanel(view: string,movieId:string) {
        this.setCurrentSelectedId(movieId);
        if (view === "details") {
            this.showDetailsView();
        }
        $("#panel-main-container").animate({ "left": "0%" }, 500, () => { })
    }
    //hide any open views that are on the panel and slide closed
    public closePanel() {
        this.hideDetailsView();
        console.log("close")
        $("#panel-main-container").animate({ "left": "-100%" }, 500, () => { })
    }
    //create the dom node for details view and default to hidden
    private detailsView() {
        var view = document.createElement("div");
        view.setAttribute("id", "movie-details");
        view.setAttribute("class", "movie-details-main-container");
        view.setAttribute("style", "display:none");
        view.innerHTML =
            `<div id="details-main">
                <iframe id="youtube-trailer" iframe width="320" height="188" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div id="movie-details-summary" class="movie-details-summary-container">
                    <button>
                            <i class="fas fa-film"></i>Theater</button>
                    <div id="showtimes-container" class="showtimes-container">
    
                    </div>
                    <p></p>
                 </div>
            </div>
        `
        return view
    }
    private showDetailsView() {
        var showTimesContainer = document.getElementById("showtimes-container");
        var youTubeIframe=   document.getElementById("youtube-trailer");
        var movieSummaryParagraph =  document.getElementById("movie-details-summary").getElementsByTagName("p")[0]
        
        //reset innhtml first for showtimes
        showTimesContainer.innerHTML = "";
        //set link for youtube from selected movie object
        youTubeIframe.setAttribute("src", `https://www.youtube.com/embed/${this.selectedMovie["trailer"]}`);
        //set summary info
        movieSummaryParagraph.innerText = this.selectedMovie["overview"];
        //set the inner text with the  movie showtimes 
        this.selectedMovie["showings"].forEach((showing) => {
            var elem = document.createElement("div");
            elem.innerText = showing;
            
            //attach showtimes
            showTimesContainer.appendChild(elem)
        })

        //show thedetails view
        document.getElementById("movie-details").style.display = "inherit";

    }
    private hideDetailsView() {
        document.getElementById("movie-details").style.display = "none";
    }
    
}
