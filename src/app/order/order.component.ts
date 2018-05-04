import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from '../../interfaces/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input("order") public order:IOrder;
  constructor() { }
  
  ngOnInit() {
  }

}
