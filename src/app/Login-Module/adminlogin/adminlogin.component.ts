import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {IAdmin} from '../IUsers.model';
import {AdminserviceService} from 'src/app/services/adminservice.service';
//import {AdminbookpageComponent} from './Book-Module/adminbookpage/adminbookpage.component';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  isDisabled:boolean= true;
  msgTrue:boolean=true;
  adminData=<IAdmin>{};
  adminlist:IAdmin[]=[];
  admemail="";

  constructor(private router1:Router, private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
    this.adminserviceService.getData().subscribe(data =>{
      this.adminlist=data;
    });
  }


  adminlogin(adminloginForm:NgForm){
    console.log(adminloginForm);
    for(let k in this.adminlist)
    {
      if(adminloginForm.value.admemail == this.adminlist[k].admemail && adminloginForm.value.password == this.adminlist[k].password)
      {
        alert("Welcome"  + "\n" + "Login is Successfull!!!!");
        this.msgTrue=false;
        this.isDisabled =!this.isDisabled;
        console.log('entered admin login');
        this.router1.navigateByUrl('/book');
        console.log('go to admin book page');
        //break;
      }
      
    }
    if(this.msgTrue){
      alert("Login Failed");
    }
  }
}
