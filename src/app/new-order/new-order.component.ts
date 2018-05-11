import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { OrdersService } from "../../services/orders.service";
import { IOrder } from "../../interfaces/order.interface";
import { randomBetween } from "../../utils/random.utils";

interface IMDSelectOption {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-new-order",
  templateUrl: "./new-order.component.html",
  styleUrls: ["./new-order.component.css"]
})
export class NewOrderComponent implements OnInit {
  mains: Array<IMDSelectOption> = [];
  @Output("closeAddForm")
  closeAddForm = new EventEmitter<{ main: string; salads: Array<string> }>();
  salads: Array<IMDSelectOption> = [];
  selectedSalads: Array<string> = [];
  selectedMain: string = "";
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.mains = this.ordersService
      .getMains()
      .map(main => ({ value: main, viewValue: main }));
    this.salads = this.ordersService
      .getSalads()
      .map(salad => ({ value: salad, viewValue: salad }));
  }

  add() {
    if (this.selectedSalads.length > 0 && this.selectedMain !== "") {
      this.closeAddForm.emit({
        main: this.selectedMain,
        salads: this.selectedSalads
      });
    }
  }
}
