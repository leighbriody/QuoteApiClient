import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllQuoteTypesPage } from './all-quote-types.page';

const routes: Routes = [
  {
    path: '',
    component: AllQuoteTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllQuoteTypesPageRoutingModule {}
