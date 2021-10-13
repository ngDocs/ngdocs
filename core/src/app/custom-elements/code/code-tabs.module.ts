import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import {WithCustomElementComponent} from '../element-registry';

import {CodeTabsComponent} from './code-tabs.component';
import {CodeModule} from './code.module';

@NgModule({
  imports: [CommonModule, MatCardModule, MatTabsModule, CodeModule],
  declarations: [CodeTabsComponent],
  exports: [CodeTabsComponent],
  entryComponents: [CodeTabsComponent]
})
export class CodeTabsModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = CodeTabsComponent;
}
