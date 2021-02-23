import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { NgForm } from '@angular/forms';
import { IBooks } from 'src/app/Login-Module/IUsers.model';



@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.scss']
})
export class AdminupdateComponent implements OnInit {

  bookData=<IBooks>{};

  constructor(private router1:Router, private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }

  adminUpdate(updateForm:NgForm){
    console.log(updateForm);
    this.bookData.id = updateForm.value.id;
    this.bookData.bookname = updateForm.value.bookname;
    this.bookData.author = updateForm.value.author;
    this.bookData.rackno = updateForm.value.rackno;
    this.bookData.status = updateForm.value.status;
    this.bookData.category = updateForm.value.category;
    this.adminserviceService.updateBookData(this.bookData);
    alert("Your data updated successfully!!")
  }

}
