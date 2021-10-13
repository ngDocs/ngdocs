import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';

import {WithCustomElementComponent} from '../element-registry';

import {ResourceListComponent} from './resource-list.component';
import {ResourceService} from './resource.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ResourceListComponent],
  entryComponents: [ResourceListComponent],
  providers: [ResourceService]
})
export class ResourceListModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ResourceListComponent;
}
