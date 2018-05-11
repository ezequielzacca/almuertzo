import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

interface IMDSelectOption {
  value: string, viewValue: string
}
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
  
})
export class NewOrderComponent implements OnInit {
  mains: Array<IMDSelectOption> = [];
  @Output("closeAddForm") closeAddForm = new EventEmitter();
  salads: Array<IMDSelectOption>= [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.mains = this.ordersService.getMains()
      .map(main => ({ value: main, viewValue: main }));
    this.salads = this.ordersService.getSalads()
      .map(salad => ({ value: salad, viewValue: salad }));
  }

  add(){
    this.closeAddForm.emit();
  }

  

}
