import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesOfTypePageRoutingModule } from './quotes-of-type-routing.module';

import { QuotesOfTypePage } from './quotes-of-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesOfTypePageRoutingModule
  ],
  declarations: [QuotesOfTypePage]
})
export class QuotesOfTypePageModule {}
