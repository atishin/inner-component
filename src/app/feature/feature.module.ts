import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { WindowComponent } from 'app/components/window/window.component';
import { TemplateDirective } from './template.directive';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WindowComponent,
    TemplateDirective,
    InnerComponent,
  ],
  entryComponents: [
    InnerComponent,
  ],
  exports: [
    WindowComponent,
    InnerComponent,
    TemplateDirective
  ]
})
export class FeatureModule { }
