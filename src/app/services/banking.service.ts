import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionRequest } from '../models/transaction_request.type';
import { User } from '../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private apiUrl = 'http://localhost:8080/api'; // Backend API URL

  constructor(private http: HttpClient) {}

  getBankingInfo(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user`)
  }

  getBalance(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/balance`)
  }

  deposit(transaction_request: TransactionRequest): Observable<any> {
    console.log(transaction_request);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,  // ✅ Ensure correct format
      'Content-Type': 'application/json'
    });
    console.log(headers);
    return this.http.post(`${this.apiUrl}/transact`, transaction_request, {headers} );
  }

  withdraw(transaction_request: TransactionRequest): Observable<any> {
    const headers = {'Authorization': `Bearer ${localStorage.getItem('jwt')}`};
    return this.http.post(`${this.apiUrl}/transact`, transaction_request, {headers} );
  }
}
