import { Component, OnInit } from '@angular/core';
import { SectionServiceService } from '../section-service.service';
import { Ticker } from '../Ticker';

@Component({
  selector: 'app-pstwo',
  templateUrl: './pstwo.component.html',
  styleUrls: ['./pstwo.component.css']
})
export class PstwoComponent implements OnInit {

  date = '2020-01-04';
  symbols = ['MSFT','AMZN','GOOGL'] ;
  tickers = []; 
  constructor(private sectionService: SectionServiceService) { }

  ngOnInit(): void {
    this.sectiontwo();
  }


  sectiontwo(){
    for (var element of this.symbols){
      this.sectionService.getStockTickers(this.date,element).subscribe((result:any) => 
      {
        var ticker = {} as Ticker;
        if (result.pagination.count != 0) {
        ticker.symbol = result.data[0].symbol;
        ticker.close=result.data[0].close;
        console.log(ticker);
        this.tickers.push(ticker);
        console.log(this.tickers);
        }
        else console.log("No data");
      })
      
    }
    
  }
}
