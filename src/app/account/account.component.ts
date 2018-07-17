import { Component, OnInit, ViewChild } from '@angular/core';
import { BottomPanelComponent } from '../panels/bottom-panel/bottom-panel.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild(BottomPanelComponent) bottomPanel: BottomPanelComponent;
  constructor() { }

  ngOnInit() {
  }
  openLogin(e){
  
  }
  openCreateAccount(e){
   
  }
}
