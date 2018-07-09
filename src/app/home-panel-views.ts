export class HomePanelViews {
    //html for various panels releated to home 

    public basePanel() {
        var view = document.createElement("div");
        view.setAttribute("id", "panel-main-container");
        view.setAttribute("class", "panel-main-container")
        var html =
            ` <div id="panel-nav-container" class="panel-navigation-top-container">
                <div id="nav-button" class="nav-button-container" (click)="closePanel()">
                <i class="fas fa-chevron-left"></i>
                </div>
                <div id="panel-text-header" class="panel-navigation-top-text-header">
                </div>
            </div>
         `
         view.innerHTML  = html;

        return view
    }
    public detailsView() {
        var view = document.createElement("div");
        view.setAttribute("id", "movie-details");
        view.setAttribute("class", "movie-details-main-container")
        view.innerHTML = '<iframe id="youtube-trailer" iframe width="320" height="188"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        return view
    }
}
