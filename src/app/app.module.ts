import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Angular Material */
import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from '../services/orders.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    NewOrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
