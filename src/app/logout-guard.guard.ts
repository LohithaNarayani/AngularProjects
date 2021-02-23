import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoutComponent } from './Login-Module/logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardGuard implements CanDeactivate<LogoutComponent> {
  canDeactivate(component:LogoutComponent){
      console.log(component);
    return window.confirm("Are you sure You want to logout");
  }
  
}
