import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RequestsComponent } from './requests/requests.component';
import { ReqdetailsComponent } from './reqdetails/reqdetails.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'invoice/:id',
    component: InvoiceComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'requests/:id',
    component: ReqdetailsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
