import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(public auth:AuthService,public router:Router){

  }
  canActivate():boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login'])
      return false;
    }
    return true

  }

}
