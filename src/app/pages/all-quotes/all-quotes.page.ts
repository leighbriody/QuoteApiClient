import { IQuotes } from './../../IQuotes';
import { QuoteService } from './../../services/quote.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.page.html',
  styleUrls: ['./all-quotes.page.scss'],
})
export class AllQuotesPage implements OnInit {


allQuotes:any = [];

  //Ibject our service to access the api
  constructor(private quoteService: QuoteService) { 


  this.quoteService.getAllQuotes().subscribe((response) => {
    console.log("The get all quotes response = " , response)
    this.allQuotes = response;
  })
  }
  

  ngOnInit() {

  
  }

}
