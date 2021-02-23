import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import {IBooks,IRentedUsers,IUsers} from 'src/app/Login-Module/IUsers.model';
import { ReserveserviceService } from 'src/app/services/reserveservice.service';

@Component({
  selector: 'app-userbook',
  templateUrl: './userbook.component.html',
  styleUrls: ['./userbook.component.scss']
})
export class UserbookComponent implements OnInit {

  bookList:IBooks[]=[];
  RentList:IRentedUsers[]=[];
  loginData=<IUsers>{};
  bookname="";

  RentData=<IRentedUsers>{};

  currentDate = new Date();
  @Input() email:string="";
  @Input() id:string="";


  constructor(private router: Router,private adminserviceService:AdminserviceService,
    private reserveservice:ReserveserviceService) { 

  }

  ngOnInit(): void {
    console.log(this.email);
    console.log(this.id);
    this.adminserviceService.getBookData().subscribe(data =>{
      this.bookList=data;
    });
    
  }

  searchBook(){
    this.router.navigateByUrl('/searchbook');
  }

  returnBook(){
    this.router.navigateByUrl('/returnbook');
  }

  reserveBuy(bookName:any){
    window.confirm("Do u want to buy this book?");
    console.log(bookName);
    const buyerData:any ={id:this.id, email:this.email, bookname:bookName,buy:"yes" , rent:"no" ,Date:this.currentDate};
    this.reserveservice.createRentData(buyerData).subscribe(data =>{
      console.log(data);
    });
  }
   
  rentBook(bkName:any){
    window.confirm("Do u want to rent this book?");
    console.log(bkName);
    const renterData:any ={id:this.id, email:this.email, bookname:bkName,buy:"no" , rent:"yes",Date:this.currentDate};
    this.reserveservice.createRentData(renterData).subscribe(data =>{
      console.log(data);
      alert("Your booking is successful!!");
    });
  }
}
