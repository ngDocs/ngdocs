import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {WithCustomElementComponent} from '../element-registry';

import {ContributorListComponent} from './contributor-list.component';
import {ContributorComponent} from './contributor.component';
import {ContributorService} from './contributor.service';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [ContributorListComponent, ContributorComponent],
  entryComponents: [ContributorListComponent],
  providers: [ContributorService]
})
export class ContributorListModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ContributorListComponent;
}
