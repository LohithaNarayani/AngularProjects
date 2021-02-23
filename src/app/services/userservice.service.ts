import { Injectable } from '@angular/core';
import { IUsers} from '../Login-Module/IUsers.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  Url:string="http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getData(){
    this.httpClient.get(this.Url).subscribe(data => console.log(data));
    return this.httpClient.get<IUsers[]>(this.Url);
  }

  postRegData(storeRegData:IUsers){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post(this.Url,storeRegData);
    
  }

  
    
}
