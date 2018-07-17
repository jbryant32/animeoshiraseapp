import { Injectable } from '@angular/core';
import { Component, OnInit, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, Renderer2, ElementRef } from '@angular/core';
import *  as $ from 'jquery';
import { BottomPanelComponent } from '../panels/bottom-panel/bottom-panel.component';
import { TheaterInfoComponent } from '../panel-components/theater-info/theater-info.component';
import { PanelEventInterface } from '../panel-event-interface';
@Injectable()
export class PanelEventHandlerService {

  panelComponent;
  currentAttachedComponent;
  constructor(
    private componetFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef

  ) {

  }

  public openPanelView(componentToAttach: any, panelToOpen: any) {
    //this.componentToAttach(Attach);
    if (panelToOpen === BottomPanelComponent)
      this.openBottomPanelAttachTheaterInfo();
  }
  private purgePanel() {
      this.appRef.detachView(this.currentAttachedComponent.hostView);
      this.currentAttachedComponent.destroy();
      this.appRef.detachView(this.panelComponent.hostView);
      this.panelComponent.destroy();
  }
  openBottomPanelAttachTheaterInfo() {
    //create the bottom panel instance
    this.panelComponent = this.componetFactoryResolver
      .resolveComponentFactory(BottomPanelComponent)
      .create(this.injector);
      //set the function to run when the pane closes in this case it deletes the panel and the attachment
    this.panelComponent
    .instance
    .closingComplete = () => { console.log("panel closed"); this.purgePanel(); }
    this.currentAttachedComponent = this.componetFactoryResolver
      .resolveComponentFactory(TheaterInfoComponent)
      .create(this.injector);

    //attach to angular component tree
    this.appRef.attachView(this.panelComponent.hostView);
    this.appRef.attachView(this.currentAttachedComponent.hostView);

    //get the dom reference for the theater component
    var domElem = (this.currentAttachedComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    //get the dom reference for the bottom panel component
    var bottomEl = (this.panelComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(bottomEl);
    document.getElementById("bottom-panel-main-container").appendChild(domElem);

  }
  

}
