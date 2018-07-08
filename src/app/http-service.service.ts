import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Moviemodel } from './moviemodel';
@Injectable()
export class HttpServiceService {

  private url: string = "https://apianimearato.azurewebsites.net/api/v1/get"
  constructor(private _http: Http) { }


  getAll(callback: (movieData: Moviemodel[]) => void) {
    this._http.get(this.url).map((item) => {

      var json = item.json();
      return json;

    }).subscribe((success: [object]) => {
      var mapped = success.map((item) => {
        var movie = new Moviemodel();
        movie.poster_sm = new Image();
        movie.poster_sm.src = `data:image/png;base64,${item["poster_sm"]}`;
        movie.poster_lg = new Image();
        movie.poster_lg.src = `data:image/png;base64,${item["poster_lg"]}`;
        movie.poster_md = new Image();
        movie.poster_md.src = `data:image/png;base64,${item["poster_md"]}`;
        movie.poster_lgx = new Image();
        movie.poster_lgx.src = `data:image/png;base64,${item["poster_lgx"]}`;
        movie.theatricalRelease = item["theatricalRelease"];
        movie.releaseDate = item["releaseDate"];
        movie.title = item["title"];
        return movie;
      });
      callback(mapped);
      

    }, (error) => { console.log("failure") });
  }
}
