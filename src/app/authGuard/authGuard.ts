import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    let _router = inject(Router)
    let authService = inject(AuthService)
    if (authService.isAuthenticated()) {
        return true;
    }
    else {
        _router.navigate(['login'])
        return false;
    }
};