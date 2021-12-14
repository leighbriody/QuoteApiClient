import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllQuotesPage } from './all-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: AllQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllQuotesPageRoutingModule {}
