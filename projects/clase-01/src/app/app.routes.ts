import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bienvenido',
        loadComponent: () => import('./bienvenido/bienvenido.component')
            .then((m) => m.BienvenidoComponent)
    },
    {
        path: 'bienvenida',
        loadComponent: () => import('./bienvenido/bienvenido.component')
            .then((m) => m.BienvenidoComponent)
    },
    {
        path: 'edad',
        loadComponent: () => import('./form-edad/form-edad.component')
            .then((m) => m.FormEdadComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component')
            .then((m) => m.LoginComponent)
    },
    { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () => import('./error/error.component')
            .then((m) => m.ErrorComponent)
    },
];
