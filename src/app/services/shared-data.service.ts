import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  constructor() { }
  private movies: Object[]
  private selectedMovie: Object;
  public setMovies(movies: Object[]) {
    this.movies = movies;
  }
  public setSelectedMovie(id: string) {
    this.movies.forEach((movie) => {
      if (movie["id"].toString() === id) {
        this.selectedMovie = movie;
      }
    });
  }
  public getMovies(): Object[] {
    return this.movies;
  }
  public getSelectedMovie(){
    return this.selectedMovie;
  }
}
