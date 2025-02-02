import { Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from '../shared/components/contact/contact.component';
import { ProductlistComponent } from '../shared/components/products/productlist/productlist.component';
import { ProductdetailsComponent } from '../shared/components/products/productdetails/productdetails.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: FirstComponent },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'products/:id', component: ProductdetailsComponent },
    { path: '**', component: NotFoundComponent },
];
