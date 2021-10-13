import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {CodeComponent} from './code.component';
import {PrettyPrinter} from './pretty-printer.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [CodeComponent],
  entryComponents: [CodeComponent],
  exports: [CodeComponent],
  providers: [PrettyPrinter]
})
export class CodeModule {
}
