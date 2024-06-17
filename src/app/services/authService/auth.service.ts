import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Ilogin } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) { }
  login(email: string, password: string):Observable<HttpResponse<Ilogin>> {
    return this.http.post<{email : string , password : string, token? : string}>("auth/", { email, password })
  }
  setItem(token: string) {
     localStorage.setItem('token', token)
  }
  isAuthenticated(){
    return localStorage.getItem('token');
  }
}
