import { IQuotes } from './../../IQuotes';
import { IQuoteTypes } from './../../IQuoteTypes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quotes-of-type',
  templateUrl: './quotes-of-type.page.html',
  styleUrls: ['./quotes-of-type.page.scss'],
})
export class QuotesOfTypePage implements OnInit {

  constructor(private alertCtrl :AlertController , private activatedRouter: ActivatedRoute , private quoteService: QuoteService) { }


   quoteId = this.activatedRouter.snapshot.paramMap.get("id");
  allQuotes:any = [];

  ngOnInit() {

    //when this page is called it means the user has clicked on a quote type ,
    //so we need to get that quote type and get all quotes of that type and display
    let quoteTypeId = this.activatedRouter.snapshot.paramMap.get("id");

    //we then need to call the quote service to get all quotes of that id
    this.quoteService.getQuotesOfType(quoteTypeId).subscribe((response) => {
      console.log("The get all quotes of type response = " , quoteTypeId , " " ,  response )
      this.allQuotes = response;
    })

  }

  async addQuoteType(){
    //when they are on this page we know the quoteType Id as we have it declared 

    //so whehn we are adding a new quote its with that id 

    const alert = await this.alertCtrl.create({
      header: 'Add Module',
      inputs:[
        {
          name:'quote',
          placeholder: 'Quote Text ..',
          type: 'text'
        },
        {
          name:'author',
          placeholder: 'Author',
          type: 'text'
        },

       
      ],
      buttons: [
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text:'Add',
          handler:(res)=>{
            this.quoteService.addQuote( {id:0  , author: res.author , quoteText:res.quote , imageUrl: 'test.jpg' ,  quoteTypeId:parseInt(this.quoteId)})
          }
        }
      ]
    });

    await alert.present();
  
   }
  }
