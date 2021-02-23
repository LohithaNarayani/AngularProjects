import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import {IUsers} from '../IUsers.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regData=<IUsers>{};
  

  constructor(private userserviceService:UserserviceService) { }

  msgTrue=false;

  ngOnInit(): void {
  }

  registrationForm(registrationForm:NgForm){

    //storing registration data...
    
    console.log(registrationForm.value.email);
    console.log(registrationForm.value.pass);

    const newuser:any= {email:registrationForm.value.email, pass:registrationForm.value.pass};
    this.userserviceService.postRegData(newuser).subscribe(data =>{
      console.log(registrationForm);
      this.msgTrue=true;
    });
  }
}
