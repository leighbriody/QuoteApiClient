import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllQuoteTypesPageRoutingModule } from './all-quote-types-routing.module';

import { AllQuoteTypesPage } from './all-quote-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllQuoteTypesPageRoutingModule
  ],
  declarations: [AllQuoteTypesPage]
})
export class AllQuoteTypesPageModule {}
