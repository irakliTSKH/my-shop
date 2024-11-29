import { Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: '**', redirectTo: '/home' }
];
