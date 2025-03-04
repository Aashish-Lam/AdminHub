import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyStoreComponent } from './components/my-store/my-store.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'my-store',
    component: MyStoreComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
];
