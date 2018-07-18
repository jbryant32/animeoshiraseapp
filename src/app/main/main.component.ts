import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { by, element } from '../../../node_modules/protractor';
 import * as $ from 'jquery';
import { timer } from '../../../node_modules/rxjs/observable/timer';
import { setTimeout } from 'timers';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  displayHome:string ='display:none;';
  displayAccount:string ='display:none;';
   constructor(private router:Router,private rd:Renderer2,private hostElement: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  
  }
  ngAfterContentInit(){
    
    
    
  }
   

  clickedHome(e){
    document.getElementById('home').style.display = "inherit";
    document.getElementById('account').style.display = "none";
  }
  clickedAccount(e){
    document.getElementById('home').style.display = "none";
    document.getElementById('account').style.display = "inherit";
  }
  openAccount(){}
}
