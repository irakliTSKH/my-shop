import { Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { ProductsComponent } from './components/user/products/products.component';
import { HomeComponent } from './components/user/home/home.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { AboutComponent } from './components/user/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: '**', redirectTo: '/home' }
];
