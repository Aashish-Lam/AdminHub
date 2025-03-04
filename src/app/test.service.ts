import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient;
@Injectable({
  providedIn: 'root',
})
export class TestService {
  private apiUrl = 'http://localhost:5000/api';
  constructor(private httpclient: HttpClient) {}
  getDashboardMetrics(): Observable<any> {
    return this.httpclient.get<any>(`${this.apiUrl}/dashboard`);
  }
  getOrders(): Observable<any> {
    return this.httpclient.get<any>(`${this.apiUrl}/orders`);
  }
  getTodos(): Observable<any> {
    return this.httpclient.get<any>(`${this.apiUrl}/todos`);
  }
}
