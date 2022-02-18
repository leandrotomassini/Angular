import { PortfolioComponent } from './portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
