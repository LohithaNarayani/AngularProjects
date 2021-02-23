import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from 'src/app/services/reserveservice.service';
import {IRentedUsers} from 'src/app/Login-Module/IUsers.model';

@Component({
  selector: 'app-buyrentusers',
  templateUrl: './buyrentusers.component.html',
  styleUrls: ['./buyrentusers.component.scss']
})
export class BuyrentusersComponent implements OnInit {

  RentList:IRentedUsers[]=[];

  constructor(private reserveservice:ReserveserviceService) { }

  ngOnInit(): void {
    this.reserveservice.getRentData().subscribe(data =>{
      this.RentList=data;
    });
  }
}
