import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        let data = this.auth.isAuthenticated()
        if (data !== null) {
            const decodedToken: any = jwtDecode(data);
            let currentTime = Date.now() / 1000
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token')
                throw new Error('token Expire')
            }
        }
        const cloneRequest = request.clone({
            setHeaders: {
                Authorization: `${data}`
            }
        })
        return next.handle(cloneRequest);
    }
}