import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SearchResultsComponent} from './search-results/search-results.component';
import {SelectComponent} from './select/select.component';

@NgModule({
  imports: [CommonModule],
  exports: [SearchResultsComponent, SelectComponent],
  declarations: [SearchResultsComponent, SelectComponent]
})
export class SharedModule {
}
