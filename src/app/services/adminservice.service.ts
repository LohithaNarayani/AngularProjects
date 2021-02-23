import { Injectable } from '@angular/core';
import { IAdmin, IBooks} from '../Login-Module/IUsers.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  Url:string="http://localhost:3000/Admin";
  apiUrl:string="http://localhost:3000/Books";

  constructor(private httpClient: HttpClient) { }

  getData(){
    this.httpClient.get(this.Url).subscribe(data => console.log(data));
    return this.httpClient.get<IAdmin[]>(this.Url);
  }

  getBookData(){
    console.log(this.httpClient.get(this.apiUrl));
    this.httpClient.get(this.apiUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.apiUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<IBooks[]>(this.apiUrl);
  }
  
   createBookData(createBookData:IBooks){
    return this.httpClient.post(this.apiUrl,createBookData);
   }

  updateBookData(updateBookData:IBooks){
    return this.httpClient.put(this.apiUrl +"/" +updateBookData.id,updateBookData).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>
      console.log("Error" +error));
    }

    deleteBookData(id:IBooks){
      return this.httpClient.delete(this.apiUrl +"/" +id).subscribe(
        (data) =>{
          console.log(data);
        },
        (error) =>
      console.log("Error" +error));
    }
}
