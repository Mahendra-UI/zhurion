import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./website/website.routes').then(m => m.websiteRoutes) },
  
    {
      path: 'home',
      loadChildren: () => import('./website/website.routes').then(m => m.websiteRoutes),
    },
  
    // Optional catch-all fallback
    { path: '**', redirectTo: 'home' },
  ];
  