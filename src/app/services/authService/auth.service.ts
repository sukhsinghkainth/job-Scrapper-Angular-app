import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpService) { }
  login(email:string,password:string){
    return this.http.post<any>("auth/",{email,password})
  }
}
