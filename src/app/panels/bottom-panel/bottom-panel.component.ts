import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import *  as $ from 'jquery';
import { TheaterInfoComponent } from '../../panel-components/theater-info/theater-info.component';
@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit {
  @ViewChild(TheaterInfoComponent) theaterInfo: TheaterInfoComponent;
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
  }
  openPanel() {
    var theaterUrl = this.sharedData.getSelectedMovie()["theaterUrl"];
    this.theaterInfo.setTheaterUrl(theaterUrl)
    $('#bottom-panel-main-container').animate({ top: "10%" }, 200, () => { });
  }
  closePanel() {
    this.theaterInfo.closeTheaterUrl();
    $('#bottom-panel-main-container').animate({ top: "100%" }, 200, () => { });
  }
}
