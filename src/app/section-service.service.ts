import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService {

   baseurl = 'http://api.marketstack.com/v1/eod/' ; 
  
   constructor(private http:HttpClient) { }

  getStockTickers(date, symbol):Observable<any>{
    return this.http.get(this.baseurl+date+'?access_key=8918ed0659e42fa86d2cef9852354724&symbols='+symbol+'&exchange=XNAS');    
  }
}
