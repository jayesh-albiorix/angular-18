import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import("./pages/auth/login/login.component").then((c) => c.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import("./pages/dashboard/dashboard.component").then((c) => c.DashboardComponent)
    },
    {
        path: 'upload-image',
        loadComponent: () => import('./upload-image/upload-image.component').then((c) => c.UploadImageComponent)
    }
];
