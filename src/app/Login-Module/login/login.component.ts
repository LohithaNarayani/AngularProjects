import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IUsers} from '../IUsers.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isDisabled:boolean= true;
  loginData=<IUsers>{};
  list:IUsers[]=[];
  email:string="";
  id:string="";
  login:boolean=false;
  msgTrue:boolean=true;

  constructor(private router:Router, private userserviceService:UserserviceService) { }


  ngOnInit(): void {
    this.userserviceService.getData().subscribe(data =>{
      this.list=data;
    });
  }
  

  loginSubmit(loginForm:NgForm)
  {
    console.log(loginForm);

    for(let i in this.list)
    {
      if(loginForm.value.email == this.list[i].email && loginForm.value.pass == this.list[i].pass)
      {
        alert("Welcome" + "\n" + "Login is Successfull!!!!");
        this.msgTrue=false;
        this.isDisabled =!this.isDisabled;
        //this.router.navigateByUrl('/userbook');
        this.email=this.list[i].email;
        //this.id=this.list[i].id;
        this.login=true;
      }
      
    }
    if(this.msgTrue){
      alert("Login Failed");
    }
  }

  
}
