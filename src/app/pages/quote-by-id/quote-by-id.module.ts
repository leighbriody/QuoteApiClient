import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteByIdPageRoutingModule } from './quote-by-id-routing.module';

import { QuoteByIdPage } from './quote-by-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteByIdPageRoutingModule
  ],
  declarations: [QuoteByIdPage]
})
export class QuoteByIdPageModule {}
