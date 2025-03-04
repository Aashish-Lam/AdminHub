import { Component } from '@angular/core';
import { TestService } from '../../test.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected dashboardDataset!: any;
  protected todosList!: any;
  protected orders!: any;

  constructor(public testservice: TestService) {
    this.testservice
      .getDashboardMetrics()
      .subscribe((element) => (this.dashboardDataset = element));
    this.testservice
      .getOrders()
      .subscribe((element) => (this.orders = element));
    this.testservice
      .getTodos()
      .subscribe((element) => (this.todosList = element));
  }
  objectkeys(object: object): any {
    return Object.keys(object);
  }
  getBackgroundClass(color: string | undefined): string {
    return `bg-${color ? color + '-400' : 'gray-100'}`;
  }
}
