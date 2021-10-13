import {CommonModule} from '@angular/common';
import {NgModule, Type} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {WithCustomElementComponent} from '../element-registry';

import {FileNotFoundSearchComponent} from './file-not-found-search.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FileNotFoundSearchComponent],
  entryComponents: [FileNotFoundSearchComponent]
})
export class FileNotFoundSearchModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = FileNotFoundSearchComponent;
}
