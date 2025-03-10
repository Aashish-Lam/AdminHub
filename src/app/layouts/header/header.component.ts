import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NavigationService } from '../services/navigation.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  clicked: boolean = false;
  username!:string|null
  constructor(public navservice: NavigationService, public authservice:AuthService ,private router:Router) {
    this.username=this.authservice.getUsername()
  }
  onclick($event: any) {
    this.clicked = !this.clicked;
    this.navservice.setToggle(this.clicked);
  }
  logOut(){
    this.authservice.logout()
    this.router.navigate([`login`])
  }
  displayUsername():string|null{
    return this.username
  }
}
