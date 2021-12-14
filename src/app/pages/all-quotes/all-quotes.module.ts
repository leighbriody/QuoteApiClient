import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllQuotesPageRoutingModule } from './all-quotes-routing.module';

import { AllQuotesPage } from './all-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllQuotesPageRoutingModule
  ],
  declarations: [AllQuotesPage]
})
export class AllQuotesPageModule {}
