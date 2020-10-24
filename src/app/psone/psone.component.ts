import { Component, OnInit } from '@angular/core';
import { SectionServiceService } from '../section-service.service';
import { Ticker } from '../Ticker';

@Component({
  selector: 'app-psone',
  templateUrl: './psone.component.html',
  styleUrls: ['./psone.component.css']
})
export class PsoneComponent implements OnInit {
  
  date = '2020-01-03';
  symbols = ['MSFT','AMZN','GOOGL'] ;
  tickers = []; 
  constructor(private sectionService: SectionServiceService) { }

  ngOnInit(): void {
    this.sectionOne();
  }


  sectionOne(){
    for (var element of this.symbols){
      this.sectionService.getStockTickers(this.date,element).subscribe((result:any) => 
      {
        var ticker = {} as Ticker;
        console.log('myelement'+element);
        ticker.symbol = result.data[0].symbol;
        ticker.close=result.data[0].close;
        console.log('mytcker'+ticker);
        this.tickers.push(ticker);
        console.log('mytickers'+this.tickers);
      })
      
    }
    
  }
}
