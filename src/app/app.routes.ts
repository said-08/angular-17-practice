import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'morse',
        title: 'Morse',
        loadComponent: () => import('./morse/morse.component'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./user/user.component').then(r => r.UserComponent)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
