import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./pages/easybanker/easybanker.component').then((m) => m.EasybankerComponent);
        }
    },
];