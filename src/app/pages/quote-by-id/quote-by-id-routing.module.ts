import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteByIdPage } from './quote-by-id.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteByIdPageRoutingModule {}
