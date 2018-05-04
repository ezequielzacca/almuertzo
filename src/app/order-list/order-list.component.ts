import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../interfaces/order.interface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders:Array<IOrder>;
  constructor() { }

  ngOnInit() {
    this.orders = [{
      hungryPerson:"FX",
      main:"Napolitana",
      salads:['Brocoli','Lentejas','Chauchas']
    },
    {
      hungryPerson:"Pancho",
      main:"Pollo",
      salads:['Huevo','Coreanito','Zapallito']
    },
    {
      hungryPerson:"Ezequiel",
      main:"Suprema",
      salads:['Arroz','Lentejas','Fideos']
    }]
  }

}
