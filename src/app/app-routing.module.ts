import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RequestsComponent } from './requests/requests.component';
import { ReqdetailsComponent } from './reqdetails/reqdetails.component';
import { ReportsComponent } from './reports/reports.component';
import { ReturnsComponent } from './returns/returns.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsystemComponent} from './bookingsystem/bookingsystem.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
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
  {
    path: 'returns',
    component: ReturnsComponent
  },
  {
    path: 'expenses',
    component: ExpensesComponent
  },
  {
    path: 'booking',
    component: BookingsystemComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
