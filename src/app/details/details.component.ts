import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  screenW: number = 0;
  screenH: number = 0;
  constructor() { }

  ngOnInit() {
    console.log(window.innerWidth);
    if(window.innerWidth){
      this.screenW = window.innerWidth;
      this.screenH =  window.innerHeight;
    }
    else{
     this.screenW =  document.body.clientWidth;
     this.screenH =  document.body.clientHeight;
    }
    
    console.log("page loaded")
    jQuery('#youTube').addClass("center-youtube")
  }
  
  public onBackPressed()
  {
    window.location.href ="home";
  }

}
