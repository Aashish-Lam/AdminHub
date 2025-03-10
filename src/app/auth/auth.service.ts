import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import{JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:8080/auth/login'
  constructor(private http:HttpClient , public jwthelperservice:JwtHelperService) {


  }
  isLoggedIn:boolean=false
  login(email:string | null | undefined, password:string | null | undefined):Observable<boolean>{
    return this.http.post<any>(this.apiUrl,{ email, password}).pipe(map(response=>{
      localStorage.setItem('JWT_Token',response.token)
      return true;
    }),catchError(error=>{
      console.log(error)
      this.isLoggedIn=false
      return of(false)
    }

    ));
  }
  logout():void{
    localStorage.removeItem('JWT_Token')
    this.isLoggedIn = false;
  }
  isAuthenticated():boolean{
    const  token= localStorage.getItem('JWT_Token')
    return !this.jwthelperservice.isTokenExpired(token);
  }
}
