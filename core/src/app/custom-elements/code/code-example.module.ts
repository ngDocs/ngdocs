import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';

import {WithCustomElementComponent} from '../element-registry';

import {CodeExampleComponent} from './code-example.component';
import {CodeModule} from './code.module';

@NgModule({
  imports: [CommonModule, CodeModule],
  declarations: [CodeExampleComponent],
  exports: [CodeExampleComponent],
  entryComponents: [CodeExampleComponent]
})
export class CodeExampleModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = CodeExampleComponent;
}
