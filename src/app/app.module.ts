import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { HttpClientModule } from '@angular/common/http';
import { RequestsComponent } from './requests/requests.component';
import { ReqdetailsComponent } from './reqdetails/reqdetails.component';
import { ReportsComponent } from './reports/reports.component';
import { ReturnsComponent } from './returns/returns.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsystemComponent } from './bookingsystem/bookingsystem.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductsComponent,
    OrdersComponent,
    InvoiceComponent,
    RequestsComponent,
    ReqdetailsComponent,
    ReportsComponent,
    ReturnsComponent,
    ExpensesComponent,
    DashboardComponent,
    BookingsystemComponent,
    TableComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
