import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, Type} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {WithCustomElementComponent} from '../element-registry';

import {AnnouncementBarComponent} from './announcement-bar.component';

@NgModule({
  imports: [CommonModule, SharedModule, HttpClientModule],
  declarations: [AnnouncementBarComponent],
  entryComponents: [AnnouncementBarComponent],
})
export class AnnouncementBarModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = AnnouncementBarComponent;
}
