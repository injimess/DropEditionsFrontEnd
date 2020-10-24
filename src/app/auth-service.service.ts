import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authUrl } from 'src/environments/environment';
import { Token } from './Tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser: string; 

  constructor(private http:HttpClient) { }
  
  login(data):Observable<any>{
    console.log(data);
    return this.http.post(authUrl,data);
    
  }

  dologin(username : string, tokens : Token){
    this.loggedUser=username;
    this.storeToken(tokens);
  }

  storeToken(token : Token){
    localStorage.setItem(this.JWT_TOKEN, token.jwt);
  }

  getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }

}
