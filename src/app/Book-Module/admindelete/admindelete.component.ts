import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBooks } from 'src/app/Login-Module/IUsers.model';
import {AdminserviceService} from 'src/app/services/adminservice.service';


@Component({
  selector: 'app-admindelete',
  templateUrl: './admindelete.component.html',
  styleUrls: ['./admindelete.component.scss']
})
export class AdmindeleteComponent implements OnInit {

  bookData:any=<IBooks>{};
  
  

  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }

  adminDelete(deleteForm:NgForm){
    this.bookData.id = deleteForm.value.id;
    this.adminserviceService.deleteBookData(this.bookData.id);
  }
}
