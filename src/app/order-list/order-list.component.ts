import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../interfaces/order.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders:Array<IOrder>;
  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.orders = this.ordersService.getAll();
  }

}
