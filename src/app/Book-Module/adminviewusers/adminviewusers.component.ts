import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/Login-Module/IUsers.model';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-adminviewusers',
  templateUrl: './adminviewusers.component.html',
  styleUrls: ['./adminviewusers.component.scss']
})
export class AdminviewusersComponent implements OnInit {

  constructor(private adminserviceService:AdminserviceService) { }

  bookList:IBooks[]=[];

  ngOnInit(): void {
    this.adminserviceService.getBookData().subscribe(data =>{
      this.bookList=data;
    })
  }

}
