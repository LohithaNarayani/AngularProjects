import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBooks } from 'src/app/Login-Module/IUsers.model';
import {AdminserviceService} from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.scss']
})
export class AdmincreateComponent implements OnInit {

  bookData=<IBooks>{};

  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }

  adminCreate(createForm:NgForm){
    console.log(createForm.value.id);
    console.log(createForm.value.bookname);
    console.log(createForm.value.author);
    console.log(createForm.value.rackno);
    console.log(createForm.value.status);
    console.log(createForm.value.category);

    const insert:any ={bookid:createForm.value.bookid, bookname:createForm.value.bookname,
                  author:createForm.value.author, rackno:createForm.value.rackno ,
                  bookstatus:createForm.value.status,category:createForm.value.category};
          this.adminserviceService.createBookData(insert).subscribe(data =>{
            console.log(createForm);
            
          }); 
  }
}
