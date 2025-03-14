import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./pages/easybanker/easybanker.component').then((m) => m.EasybankerComponent);
        }
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./pages/login-page/login-page.component').then((m) => m.LoginPageComponent);
        }
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent);
        }
    },
];