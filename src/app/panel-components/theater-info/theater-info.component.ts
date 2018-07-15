import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { DomSanitizer } from '../../../../node_modules/@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-theater-info',
  templateUrl: './theater-info.component.html',
  styleUrls: ['./theater-info.component.css']
})
export class TheaterInfoComponent implements OnInit {

  movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.fathomevents.com/categories/anime'+'?device=mobile')
  mainContainerStyle = "display:none;";
  @ViewChild('theaterUrlIframe') theaterIframe;
  constructor(private sharedData: SharedDataService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $("#site-loader").html('<object data="" />');
  }
  //
  public setTheaterUrl(url) {
    if(document.getElementById("site-loader").getElementsByTagName('object')[0])
    document.getElementById("site-loader").removeChild(document.getElementsByTagName('object')[0])

    $("#site-loader").html(`<object data="${url}" />`)
    $("object").ready(()=>{
      $("object")
    .css("width","100%")
    .css("height","100%");
    $("#site-loader")
    .css("overflow-y","scroll")
    .css("-webkit-overflow-scrolling","touch")
     
  });
    this.movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url+"?device=mobile");
    this.mainContainerStyle = "display:inherit;";
  }
  public closeTheaterUrl() {
    this.movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl('')
  }
  public Init() {

  }
}
