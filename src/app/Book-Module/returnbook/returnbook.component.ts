import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from 'src/app/services/adminservice.service';
import {IBooks} from 'src/app/Login-Module/IUsers.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.scss']
})
export class ReturnbookComponent implements OnInit {

  bookData=<IBooks>{};

  constructor(private router1:Router, private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }

  return(returnForm:NgForm){
    console.log(returnForm);
    this.bookData.id = returnForm.value.id;
    this.bookData.bookname = returnForm.value.bookname;
    this.bookData.author = returnForm.value.author;
    this.bookData.rackno = returnForm.value.rackno;
    this.bookData.status = returnForm.value.status;
    this.bookData.category = returnForm.value.category;
    this.adminserviceService.updateBookData(this.bookData);
    alert("Your data updated successfully!!")
  }
}
