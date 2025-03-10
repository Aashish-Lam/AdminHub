import { Component, inject, signal } from '@angular/core';
import { TestService } from '../../test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import NavList from '../models/navigation.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { NavigationService } from '../services/navigation.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HeaderComponent,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public NavList = NavList;
  protected orders: any;
  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  constructor(
    private dashboardService: TestService,
    public navservice: NavigationService
  ) {
    this._mobileQuery = window.matchMedia('(max-width: 760px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dashboardService.getOrders().subscribe((data) => {
      this.orders = data;
    });
    this.navservice.getToggle().subscribe((element: any) => {
      this.test = element;
    });
  }
  test: any;
  events: string[] = [];
  opened!: boolean;
  click() {
    console.log(this.test);
  }
}
