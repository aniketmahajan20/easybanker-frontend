import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwt } from '../models/jwt.type';
import { config } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUserDetails(id: string): Observable<jwt> {
    return this.http.get<jwt>(`/api/user/${id}`, {
      headers: {
        'Authorization': 'Bearer ',
      }
    }
    );
  }
}
