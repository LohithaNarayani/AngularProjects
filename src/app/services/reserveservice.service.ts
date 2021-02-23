import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { IRentedUsers } from '../Login-Module/IUsers.model';

@Injectable({
  providedIn: 'root'
})
export class ReserveserviceService {

  APIUrl:string="http://localhost:3000/rentedusers";

  constructor(private httpClient: HttpClient) { }

  getRentData(){
    console.log(this.httpClient.get(this.APIUrl));  
    this.httpClient.get(this.APIUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.APIUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<IRentedUsers[]>(this.APIUrl);
  }

  createRentData(createRentData:IRentedUsers){
    return this.httpClient.post(this.APIUrl,createRentData);
}
}
