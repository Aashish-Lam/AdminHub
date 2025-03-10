import { HttpInterceptorFn, HttpEvent, HttpRequest } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('JWT_Token');

  let modifiedReq = req;
  if (token) {
    modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(modifiedReq).pipe(
    retry(1), // Retry failed requests 3 times
    catchError((error: any) => {
      console.error('HTTP Error:', error);
      return throwError(() => new Error(error.message || 'Something went wrong'));
    })
  );
};
