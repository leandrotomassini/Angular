import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
