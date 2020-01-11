import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'"variety is the spice of life"','Vybz Kartel.','James Odera',new Date(2020,0,9)),
    new Quote(2,'"The greatest glory in living lies not in never falling, but in rising every time we fall."','Nelson Mandela','James Odera',new Date(2018,0,6)),
    new Quote(3,'"If life were predictable it would cease to be life, and be without flavor."','Eleanor Roosvelt','James Odera',new Date(2020,5,7)),
    new Quote(4,'"Life is what happens when you\'re busy making other plans."', 'John Lennon','James Odera',new Date(2018,3,6)),
  
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete) {
      this.quotes.splice(index,1);
    }
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
