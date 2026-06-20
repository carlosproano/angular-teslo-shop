  import { inject } from '@angular/core';
  import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

  export const NotAutenticatedGuard: CanMatchFn = async(
    route: Route,
    segments: UrlSegment[]
  ) => {
    // console.log('NotAutenticatedGuard');

const authService = inject(AuthService);
const router = inject(Router);

const isAuthenticated = await firstValueFrom(authService.checkStatus());
// console.log({ isAuthenticated});

if( isAuthenticated) {
  router.navigateByUrl('/');
  return false;
}

    return true;
  }
