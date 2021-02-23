import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from 'src/app/services/adminservice.service';
import {IBooks} from 'src/app/Login-Module/IUsers.model';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.scss']
})
export class AdminsearchComponent implements OnInit {

  bookList:IBooks[]=[];
  //searchedBooks:any;
  bookname:any;

  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
    this.adminserviceService.getBookData().subscribe(data =>{
      this.bookList=data;
    });
  }

  Search(){
    if(this.bookname == ""){
      this.ngOnInit();
    }
    else{
      this.bookList = this.bookList.filter(res =>{
        return res.bookname.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
      });
    }
  }
}
