import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, Type} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {WithCustomElementComponent} from '../element-registry';

import {ApiListComponent} from './api-list.component';
import {ApiService} from './api.service';

@NgModule({
  imports: [CommonModule, SharedModule, HttpClientModule],
  declarations: [ApiListComponent],
  entryComponents: [ApiListComponent],
  providers: [ApiService]
})
export class ApiListModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ApiListComponent;
}
