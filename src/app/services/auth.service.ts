import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwt } from '../models/jwt.type';

import moment from "moment";
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {
     
    constructor(private http: HttpClient) {
    }

    testGetRequest() {
        return this.http.get('http://localhost:8080/api/welcome', {responseType: "text"}).subscribe(data => console.log(data));  // ✅ Test API
    }
      
    login(email:string, password:string ){
        const body = {
            "username": email,
            "password": password
        }
        const headers  = {'Content-Type': 'application/json'};
        let url = "http://localhost:8080/api/authenticate";
        console.log("hi")
        this.http.post<any>(url, body, {headers}).subscribe(res => this.setSession(res.jwt));
        
  }

  private decodeJwtToken(token: string): jwt {
    const decodeToken: jwt = jwtDecode(token);
    return decodeToken;
  }
        
  private setSession(res: string) {
    localStorage.setItem('token', res);
    const authResult = this.decodeJwtToken(res);
    const expiresAt = moment().add(authResult.exp,'second');

    localStorage.setItem('id_token', authResult.sub);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    console.log(authResult);
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      if (!expiration) return null;

      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }  
}
