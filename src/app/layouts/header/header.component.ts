import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  clicked: boolean = false;
  constructor(public navservice: NavigationService) {}
  onclick($event: any) {
    this.clicked = !this.clicked;
    this.navservice.setToggle(this.clicked);
  }
}
