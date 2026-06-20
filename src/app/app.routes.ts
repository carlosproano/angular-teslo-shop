import { Routes } from '@angular/router';
import { NotAutenticatedGuard } from '@auth/guards/not-authenticated.guard';

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    // TODO Guards
    canMatch:[
      // () => {
      //   console.log('hola mundo');
      //   return false;
      // },
      NotAutenticatedGuard,
    ]
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.routes'),
  },

  {
    path: '',
    loadChildren: () => import('./store-front/store-front.routes')

  }
];
