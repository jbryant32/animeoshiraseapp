import { HomePanelViews } from "./home-panel-views"
import * as $ from "jquery";
import { Injectable, OnInit } from "../../node_modules/@angular/core";
@Injectable()
export class HandlePanelSwitching implements OnInit {

    private homepanelviews;
    private mainDiv;
    constructor(homepanel: HomePanelViews) {
        this.homepanelviews = homepanel
       


    }
    ngOnInit(): void {

    }
    ngAfterViewInit() {
        // document.getElementById("main-container").appendChild(this.mainDiv);
        // document.getElementById("nav-button").addEventListener("click", () => { this.closePanel() });
    }
    public openPanel(panelToOpen: string) {
        // if (panelToOpen === "details") {
        //     this.attachDetailsPanel();

        // }
        // $("#panel-main-container").animate({ "left": "0%" }, 500, () => { })

    }
    public closePanel() {
        // console.log("close")
        // $("#panel-main-container").animate({ "left": "-100%" }, 500, () => { })
    }

    private attachDetailsPanel() {
        // if (document.getElementById("movie-details")) {
        //     console.log("remove old")
        //     document.getElementById("movie-details").remove();
        // }

        // this.mainDiv.appendChild(this.homepanelviews.detailsView())

    }
}


