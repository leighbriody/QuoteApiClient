import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'all-quotes',
    loadChildren: () => import('./pages/all-quotes/all-quotes.module').then( m => m.AllQuotesPageModule)
  },
  {
    path: 'add-quote',
    loadChildren: () => import('./pages/add-quote/add-quote.module').then( m => m.AddQuotePageModule)
  },
  {
    path: 'update-quote',
    loadChildren: () => import('./pages/update-quote/update-quote.module').then( m => m.UpdateQuotePageModule)
  },
  {
    path: 'quote-by-id',
    loadChildren: () => import('./pages/quote-by-id/quote-by-id.module').then( m => m.QuoteByIdPageModule)
  },
  {
    path: 'quotes-of-type',
    loadChildren: () => import('./pages/quotes-of-type/quotes-of-type.module').then( m => m.QuotesOfTypePageModule)
  },
  {
    path: 'quotes-of-type/:id',
    loadChildren: () => import('./pages/quotes-of-type/quotes-of-type.module').then( m => m.QuotesOfTypePageModule)
  },
  {
    path: 'all-quote-types',
    loadChildren: () => import('./pages/all-quote-types/all-quote-types.module').then( m => m.AllQuoteTypesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
