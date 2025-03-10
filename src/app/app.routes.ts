import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyStoreComponent } from './components/my-store/my-store.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService as  AuthGuard} from './auth/auth-guard.service';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';


export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    component: SidebarComponent,
    canActivate:[AuthGuard],
    children:[  {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'my-store',
      component: MyStoreComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'analytics',
      component: AnalyticsComponent,
      canActivate:[AuthGuard]
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch:'full'
    },
  ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
