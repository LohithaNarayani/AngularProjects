import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login-Module/login/login.component';
import { HomeComponent } from './Login-Module/home/home.component';
import {RegisterComponent} from './Login-Module/register/register.component';
import { BookComponent } from './Book-Module/book/book.component';
import { AdminloginComponent } from './Login-Module/adminlogin/adminlogin.component';
import {AuthactiveGuard} from './authactive.guard';
import { UserbookComponent } from './Login-Module/userbook/userbook.component';
import { AdminsearchComponent } from './Book-Module/adminsearch/adminsearch.component';
import { AdminupdateComponent } from './Book-Module/adminupdate/adminupdate.component';
import { AdmindeleteComponent } from './Book-Module/admindelete/admindelete.component';
import { AdminviewusersComponent } from './Book-Module/adminviewusers/adminviewusers.component';
import {IAdmin,IBooks,IUsers} from './Login-Module/IUsers.model';
import { AdmincreateComponent } from './Book-Module/admincreate/admincreate.component';
import { SearchbookComponent } from './Login-Module/searchbook/searchbook.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { BuyrentusersComponent } from './Book-Module/buyrentusers/buyrentusers.component';
import { ReturnbookComponent } from './Book-Module/returnbook/returnbook.component';
import { LogoutComponent } from './Login-Module/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BookComponent,
    AdminloginComponent,
    UserbookComponent,
    AdminsearchComponent,
    AdminupdateComponent,
    AdmindeleteComponent,
    AdminviewusersComponent,
    AdmincreateComponent,
    SearchbookComponent,
    BuyrentusersComponent,
    ReturnbookComponent,
    LogoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
