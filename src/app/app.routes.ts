import { Routes } from '@angular/router';
import { RecepeComponent } from './recepe.component';
import { ProductsComponent } from './products.component';
import { MovementsComponent } from './movements.component';
import { DeliverComponent } from './deliver.component';

export const routes: Routes = [
  { path: 'recepe', component: RecepeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'movements', component: MovementsComponent },
  { path: 'deliver', component: DeliverComponent },
  { path: '', redirectTo: '/recepe', pathMatch: 'full' }
];