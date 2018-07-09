import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Moviemodel } from './moviemodel';
@Injectable()
export class HttpServiceService {

  private url: string = "https://animeoshirasev2.azurewebsites.net/api/v1/allMovies"
  constructor(private _http: Http) { }
  private moviesDatabase: [Object] = [{}];

  getAll(callback: (movieData: [Object]) => void) {
    this.moviesDatabase.pop();
    this._http.get(this.url).map((item) => {

      var json = item.json();
      return json;

    }).subscribe((success: [any]) => {
       success.map((item) => {
        var movie = {
          "theaterUrl": item["theaterUrl"],
          "poster_sm": "https://image.tmdb.org/t/p/w200"+item["poster_sm"],
          "poster_md": "https://image.tmdb.org/t/p/w300"+item["poster_md"],
          "poster_lg": "https://image.tmdb.org/t/p/w400"+item["poster_lg"],
          "poster_lgx": "https://image.tmdb.org/t/p/w500"+item["poster_lgx"],
          "backdrop_sm": item["backdrop_sm"],
          "backdrop_md": item["backdrop_md"],
          "backdrop_lg": item["backdrop_lg"],
          "subbed": item["subbed"],
          "dubbed": item["dubbed"],
          "trailer": item["trailer"],
          "overview": item["overview"],
          "releaseDate": item["releaseDate"],
          "theatricalRelease": item["theatricalRelease"],
          "showings": item["showings"],
          "id": item["id"],
          "title": item["title"]

        }
        this.moviesDatabase.push(movie);
        return movie;
      });
      callback(this.moviesDatabase);


    }, (error) => { console.log("failure") });
  }
}
