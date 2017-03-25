import { Component, OnInit, Input, ElementRef, ComponentRef, ViewRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {

  @ViewChild(WindowComponent) component: ComponentRef<WindowComponent>;
  // tslint:disable-next-line:no-input-rename
  @Input('window-title') title: string;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    console.log(this.component);
  }

  close() {
    const component = this.elementRef.nativeElement as HTMLElement;
    component.remove();
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }



}
