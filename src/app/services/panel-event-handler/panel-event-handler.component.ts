import { Component, OnInit, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-panel-event-handler',
  templateUrl: './panel-event-handler.component.html',
  styleUrls: ['./panel-event-handler.component.css']
})
export class PanelEventHandlerComponent implements OnInit {

  constructor(
    private componetFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {

  }

  ngOnInit() {
  }

  openPanel() { }

  componentToAttach(component: any) {
    const refToComponent = this.componetFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(refToComponent.hostView);

    var domElem = (refToComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.renderer.appendChild(this.el, domElem);
    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      this.appRef.detachView(refToComponent.hostView);
      refToComponent.destroy();
    }, 3000);
  }
}
