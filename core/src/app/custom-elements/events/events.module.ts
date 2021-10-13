import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';

import {WithCustomElementComponent} from '../element-registry';

import {EventsComponent} from './events.component';
import {EventsService} from './events.service';

@NgModule({
  imports: [CommonModule],
  declarations: [EventsComponent],
  entryComponents: [EventsComponent],
  providers: [EventsService]
})
export class EventsModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = EventsComponent;
}
