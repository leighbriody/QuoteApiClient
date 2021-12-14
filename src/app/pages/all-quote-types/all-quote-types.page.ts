import { IQuoteTypes } from './../../IQuoteTypes';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-all-quote-types',
  templateUrl: './all-quote-types.page.html',
  styleUrls: ['./all-quote-types.page.scss'],
})
export class AllQuoteTypesPage implements OnInit {

  allQuoteTypes:any = [];

  constructor(private alertCtrl :AlertController , private quoteService: QuoteService , private modalCtrl: ModalController) {

    //get all quote types
    this.quoteService.getAllQuoteTypes().subscribe((response) => {
      console.log("The get all quotes response = " , response)
      this.allQuoteTypes = response;
    })
   }

  ngOnInit() {
  }

  async addQuoteType(){
    const alert = await this.alertCtrl.create({
      header: 'Add Quote Type',
      inputs:[
        {
          name:'name',
          placeholder: 'Quote Type',
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
            this.quoteService.addQuoteType({id:0, quoteTypeName :res.name})
          }
        } 
      ]
    });

    await alert.present();
  }

  deleteType(type:IQuoteTypes){
    //when we get to here the user has requested to delete a quote type 
    this.quoteService.deleteType(type);
  }

  async editType(type:IQuoteTypes){
    //when we get to here the user has requested to delete a quote type 
    const alert = await this.alertCtrl.create({
      header: 'Update Quote Type',
      inputs:[
        {
          name:'name',
          placeholder: type.quoteTypeName,
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
            this.quoteService.editType({ id: type.id ,  quoteTypeName: res.name})
          }
        }
      ]
    });

    await alert.present();



    this.quoteService.editType(type);
  }

}
