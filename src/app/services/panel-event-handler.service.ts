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
     //create the bottom panel instance
    this.panelComponent = this.componetFactoryResolver
      .resolveComponentFactory(panelToOpen)
      .create(this.injector);
    
      //set the function to run when the pane closes in this case it deletes the panel and the attachment
    this.panelComponent
      .instance
      .closingComplete = (caller: PanelEventInterface) => { console.log("panel closed"); this.purgePanel(caller); }
    this.currentAttachedComponent = this.componetFactoryResolver
      .resolveComponentFactory(componentToAttach)
      .create(this.injector);

    //set the reference for use later
    this.panelComponent.instance.panelInstance = this.panelComponent;
    this.panelComponent.instance.attachedComponentInstance = this.currentAttachedComponent;
  
    //attach to angular component tree
    this.appRef.attachView(this.panelComponent.hostView);
    this.appRef.attachView(this.currentAttachedComponent.hostView);

    //get the dom reference for the theater component
    var domElem = (this.currentAttachedComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    //get the dom reference for the bottom panel component
    var panelELE = (this.panelComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

      //attach panel and the panels view component to the panel dom
    document.body.appendChild(panelELE);
    panelELE.getElementsByTagName('div')[0].appendChild(domElem);
  }

 

  private purgePanel(caller: PanelEventInterface) {
  
    this.appRef.detachView(caller.attachedComponentInstance.hostView);
    caller.attachedComponentInstance.destroy();
    this.appRef.detachView(caller.panelInstance.hostView);
    caller.panelInstance.destroy();
  }


}
