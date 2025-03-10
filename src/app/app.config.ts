import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { exampleInterceptor } from './example-interceptor.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([exampleInterceptor])),
    { provide: JWT_OPTIONS, useValue: {} },  // Correct usage
    { provide: JwtHelperService, useClass: JwtHelperService }  // Correctly providing the service
  ],
};
