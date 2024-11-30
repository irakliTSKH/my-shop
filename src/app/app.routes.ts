import { Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { ProductsComponent } from './components/user/products/products.component';
import { MainComponent } from './components/user/main/main.component';
import { HomeComponent } from './components/user/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: '**', redirectTo: '/home' }
];
