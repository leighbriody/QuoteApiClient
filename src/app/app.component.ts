import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   
    { title: 'All Quotes', url: '/all-quotes', icon: 'book' },
    { title: 'All Quote Types', url: '/all-quote-types', icon: 'bookmark' },
    
  
  ];
  
  constructor() {}
}
