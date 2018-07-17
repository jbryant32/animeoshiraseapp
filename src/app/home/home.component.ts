import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { LeftSlidePanelComponent } from '../panels/left-slide-panel/left-slide-panel.component';
import { SharedDataService } from '../services/shared-data.service';
import { NowInTheatersComponent } from '../home-subcomponents/now-in-theaters/now-in-theaters.component';
import { ComingSoonComponent } from '../home-subcomponents/coming-soon/coming-soon.component';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Movies: Object[];
  public Intheaters: Object[];
  public selectedMovie: Object;

  @ViewChild(LeftSlidePanelComponent) leftPanel: LeftSlidePanelComponent;
  @ViewChild(NowInTheatersComponent) nowInTheaters: NowInTheatersComponent;
  @ViewChild(ComingSoonComponent) comingSoon: ComingSoonComponent;
  constructor(private httpService: HttpServiceService,
    private sharedData: SharedDataService, private router: Router) {


  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.httpService.Init();
    this.httpService.fetchMoviesCallBack = () => {
      this.Movies = this.sharedData.getMovies();

    }
  }
  public populateNowInTheaters(e) {
    this.nowInTheaters.Init(this.leftPanel);//reference to left panel need for users selecting a movie pulls out panel
    console.log("open now in theaters");
  }
  public populateComingSoon(e) {
    this.comingSoon.init();
  }
  //event run on dom  when user selects a movie  
  public openDetails(e) {
    this.sharedData.setSelectedMovie(e.target.parentElement.id);
    this.leftPanel.openPanel("details");

  }
  public closeDetails() {
    this.leftPanel.closePanel();
  }
  public show() {
    document.getElementById('home-main-container').style.display = "inherit";
    
  }
  public hide() {
    document.getElementById('home-main-container').style.display = "hide";
  }

}
