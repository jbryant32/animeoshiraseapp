import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Moviemodel } from '../moviemodel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Movies:[Object];
  constructor(private ApiCaller: HttpServiceService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.ApiCaller.getAll( (movies:[Object]) => {
      this.Movies = movies;
    });
}
  public openDetails(e) {
    console.log()
    window.location.href = "details"
  }
}
