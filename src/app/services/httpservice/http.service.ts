import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    console.log(error)
    return throwError(() => new Error(`HTTP request failed with status ${error.status}: ${error.message}`));
  }
  get<T>(endpoint: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.ApiUrl}/${endpoint}`, { observe: 'response' }).pipe(
      catchError(this.handleError))
  }
  delete<T>(endpoint: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(`${this.ApiUrl}/${endpoint}`, { observe: 'response' }).pipe(
      catchError(this.handleError))
  }
  update<T>(endpoint: string, data: T) {
    return this.http.put<T>(`${this.ApiUrl}/${endpoint}`, data, { observe: 'response' }).pipe(
      catchError(this.handleError))
  }
  post<T>(endpoint: string, data: T): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${this.ApiUrl}/${endpoint}`, data, { observe: 'response' }).pipe(
      catchError(this.handleError))
  }
  // here t is the request and r is the response 
  postt<T,R>(endpoint: string, data: T): Observable<HttpResponse<R>> {
    return this.http.post<R>(`${this.ApiUrl}/${endpoint}`, data, { observe: 'response' }).pipe(
      catchError(this.handleError))
  }
}