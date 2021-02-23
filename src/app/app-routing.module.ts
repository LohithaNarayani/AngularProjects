import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Login-Module/login/login.component";
import {HomeComponent} from './Login-Module/home/home.component';
import { RegisterComponent } from './Login-Module/register/register.component';
import { AdminloginComponent } from './Login-Module/adminlogin/adminlogin.component';
import { BookComponent } from './Book-Module/book/book.component';
import {AuthactiveGuard} from './authactive.guard';
import {UserbookComponent} from './Login-Module/userbook/userbook.component';
import {AdminsearchComponent} from './Book-Module/adminsearch/adminsearch.component';
import {AdminupdateComponent} from './Book-Module/adminupdate/adminupdate.component';
import {AdmindeleteComponent} from './Book-Module/admindelete/admindelete.component';
import {AdminviewusersComponent} from './Book-Module/adminviewusers/adminviewusers.component';
import {AdmincreateComponent} from './Book-Module/admincreate/admincreate.component';
import {SearchbookComponent} from './Login-Module/searchbook/searchbook.component';
import { BuyrentusersComponent } from './Book-Module/buyrentusers/buyrentusers.component';
import { ReturnbookComponent } from './Book-Module/returnbook/returnbook.component';
import { LogoutComponent } from './Login-Module/logout/logout.component';
import { LogoutGuardGuard } from './logout-guard.guard';



const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'login',  component:LoginComponent},
  {path:'home',  component:HomeComponent},
  {path:'register',  component:RegisterComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path: 'book' , component:BookComponent},
  {path: 'userbook',component:UserbookComponent},
  {path: 'adminsearch',component:AdminsearchComponent},
  {path: 'adminupdate',component:AdminupdateComponent},
  {path: 'adminviewusers',component:AdminviewusersComponent},
  {path: 'admindelete',component:AdmindeleteComponent},
  {path: 'admincreate', component:AdmincreateComponent},
  {path: 'searchbook', component:SearchbookComponent},
  {path: 'returnbook', component:ReturnbookComponent},
  {path: 'buyrentusers', component:BuyrentusersComponent},
  {path: 'logout',component:LogoutComponent, canDeactivate:[LogoutGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
