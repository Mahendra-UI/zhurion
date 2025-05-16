import { Routes } from '@angular/router';
import { WebsitelandingComponent } from './websitelanding/websitelanding.component';

export const websiteRoutes: Routes = [
  {
    path: '',
    component: WebsitelandingComponent,
    children: [
        {
        path: '',
        // loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
        loadComponent: () => import('./homefour/homefour.component').then((m) => m.HomefourComponent),
        },
        {
            path: 'home',
            // loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            loadComponent: () => import('./homefour/homefour.component').then((m) => m.HomefourComponent),
        },
                {
            path: 'homefive',
            // loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            loadComponent: () => import('./homefive/homefive.component').then((m) => m.HomefiveComponent),
        },
        {
            path: 'hometwo',
            loadComponent: () => import('./hometwo/hometwo.component').then((m) => m.HometwoComponent),
        },
        {
            path: 'homethree',
            loadComponent: () => import('./homethree/homethree.component').then((m) => m.HomethreeComponent),
        },
                {
            path: 'homefour',
            loadComponent: () => import('./homefour/homefour.component').then((m) => m.HomefourComponent),
        },
        {
            path: 'about',
            loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)
        },
        {
            path: 'services',
            loadComponent: () => import('./services/services.component').then((m) => m.ServicesComponent)
        },
        {
            path: 'ourteam',
            loadComponent: () => import('./ourteam/ourteam.component').then((m) => m.OurteamComponent)
        },
        {
            path: 'contactus',
            loadComponent: () => import('./contactus/contactus.component').then((m) => m.ContactusComponent)
        },
        {
            path: '**',
            redirectTo: '/home',
            pathMatch: 'full',
        },
    ],
  },
];
