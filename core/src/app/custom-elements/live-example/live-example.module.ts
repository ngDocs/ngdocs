import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';

import {WithCustomElementComponent} from '../element-registry';

import {EmbeddedStackblitzComponent, LiveExampleComponent} from './live-example.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LiveExampleComponent, EmbeddedStackblitzComponent],
  entryComponents: [LiveExampleComponent]
})
export class LiveExampleModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = LiveExampleComponent;
}
