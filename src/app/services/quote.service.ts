import { IQuotes } from './../IQuotes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { IQuoteTypes } from '../IQuoteTypes';
import { stringify } from 'querystring';



const ApiKey = 'MySecretKey';

const headerDict = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'ApiKey': 'MySecretKey',
}


const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

  


@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  //Inject the http client into the constructor
  constructor(private http: HttpClient) { }




  getAllQuotes(): Observable<IQuotes[]> {
    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/Quote/secret";
    return this.http.get<IQuotes[]>(endpoint , requestOptions )
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<IQuotes[]>('Get user', []))
      );
  }

  getAllQuoteTypes():Observable<IQuoteTypes[]>{
    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/QuoteType";
    return this.http.get<IQuoteTypes[]>(endpoint , requestOptions )
    .pipe(
      tap(users => console.log('Users retrieved!')),
      catchError(this.handleError<IQuoteTypes[]>('Get user', []))
    );

  }

  getQuotesOfType(quoteTypeId) : Observable<IQuotes[]>  {
    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/Quote/type/";
    endpoint.concat(quoteTypeId);
    return this.http.get<IQuotes[]>(`${endpoint}${encodeURI(quoteTypeId)}`  , requestOptions)
    .pipe(
      tap(users => console.log('Users retrieved!')),
      catchError(this.handleError<IQuotes[]>('Get user', []))
    );
  }

  deleteType(quoteType :IQuoteTypes ){
    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/QuoteType/";
    this.http.delete(`${endpoint}${encodeURI(quoteType.id.toString())}` , requestOptions )
        .subscribe({
            next: data => {
                console.log("Deleted Success")
            },
            error: error => {
                
                console.error('There was an error!', error);
            }
        })   
  }

  editType(quoteType :IQuoteTypes){


    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/QuoteType?id=";

    const body = { id: quoteType.id.toString() , quoteTypeName: quoteType.quoteTypeName };
    this.http.put<any>(`${endpoint}${encodeURI(quoteType.id.toString())}`, body , requestOptions)
        .subscribe(data => console.log("Updated"));

       
  }

  addQuote(quote: IQuotes){

    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net/api/Quote";

    console.log("Add Quote Triggered :" , quote , requestOptions) 

   
     ///---------------------------
     this.http.post(endpoint,
    {
        "id": 0,
        "author": quote.author,
        "quoteText": quote.quoteText,
        "imageUrl": 'test.jpg',
        "quoteTypeId" : quote.quoteTypeId
       
    }, requestOptions )
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });


      
  }



  

  addQuoteType(quoteType :IQuoteTypes ){

    var endpoint = "https://leighbriodyquoteapi.azurewebsites.net//api/QuoteType";

    let headers = new HttpHeaders({
      
      'Accept': '*/*',
      

      });

  let options = { headers: headers };
    console.log("Add Quote Type Service Triggere");

    console.log("Making quote request to endpoint " , endpoint);
    console.log("With the body " ,quoteType );

     ///---------------------------
     this.http.post("https://leighbriodyquoteapi.azurewebsites.net/api/QuoteType",
    {
        "id": 0,
        "quoteTypeName": quoteType.quoteTypeName
       
    } , requestOptions)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });


      
  }











  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


} 






  

