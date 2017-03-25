import { Component, ViewChild, AfterContentInit, ViewChildren } from '@angular/core';
import { TemplateDirective } from "app/feature/template.directive";
import { InnerComponent } from "app/feature/inner/inner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {


  //@ViewChildren(TemplateDirective) private templates;
  @ViewChild(TemplateDirective) private template: TemplateDirective;
  @ViewChild('test') private test: TemplateDirective;

  ngAfterContentInit(): void {
    this.template.setComponent(InnerComponent);
    this.template.addComponent(InnerComponent);
    this.test.setComponent(InnerComponent);
    //console.log(this.templates);
  }

}
