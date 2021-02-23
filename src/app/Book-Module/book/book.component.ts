import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSearchPage(){
    this.router.navigateByUrl('/adminsearch');
  }

  goToCreatePage(){
    this.router.navigateByUrl('/admincreate');
  }

  goToUpdatePage(){
    this.router.navigateByUrl('/adminupdate');
  }
  
  goToDeletePage(){
    this.router.navigateByUrl('/admindelete');
  }
  toViewUserPage(){
    this.router.navigateByUrl('/adminviewusers');
  }
  buyRentUsers(){
    this.router.navigateByUrl('/buyrentusers');
  }
}
