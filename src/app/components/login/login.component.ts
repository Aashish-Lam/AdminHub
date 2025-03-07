import { Component } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public authservice:AuthService, public router:Router){

  }
  loginForm= new FormGroup({
    email: new FormControl("",[Validators.required,Validators.minLength(5)]),
    password: new FormControl("",[Validators.required,Validators.minLength(2)])
  })
  test:any
  onSubmit(){
    console.log(this.loginForm.value.email)
    this.authservice.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).subscribe((isLoggedIn)=>{
      if(isLoggedIn){
      console.log('Login Successful')
      this.router.navigate([`dashboard`])
    }else{
      console.log("Login Failed")}
    })


  }
  checkLocalStorage(){

    if (localStorage.getItem('JWT_Token') !== null) {
      console.log(localStorage.getItem('JWT_Token'));
      } else {
      console.log(localStorage.getItem('JWT_Token'));
      }
  }

}
