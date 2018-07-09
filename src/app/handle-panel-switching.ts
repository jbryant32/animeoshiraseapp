import { HomePanelViews } from "./home-panel-views"
import * as $ from "jquery";

export class HandlePanelSwitching {

    private homepanelviews;
    private mainDiv;
    constructor(homepanel: HomePanelViews) {
        this.homepanelviews = homepanel
        this.mainDiv = this.homepanelviews.basePanel()
       
        document.getElementById("main-container").appendChild(this.mainDiv);
        document.getElementById("nav-button").addEventListener("click", () => { this.closePanel()});
    }

    public openPanel(panelToOpen: string) {
        if (panelToOpen === "details") {
            this.attachDetailsPanel();
             
        }
        $("#panel-main-container").animate({ "left": "0%" }, 500, () => { })

    }
    public closePanel() {
        console.log("close")
        $("#panel-main-container").animate({ "left": "-100%" }, 500, () => { })
    }

    private attachDetailsPanel() {
        if (document.getElementById("movie-details"))
            document.getElementById("movie-details").remove();

        this.mainDiv.appendChild(this.homepanelviews.detailsView())

    }
}


