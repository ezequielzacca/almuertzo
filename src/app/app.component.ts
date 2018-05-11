import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../services/orders.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("addState", [
      state(
        "false",
        style({
          transform: "translateY(200%)  translateZ(0)"
        })
      ),
      state(
        "true",
        style({
          transform: "none"
        })
      ),
      transition("false => true", animate("600ms ease-in-out")),
      transition("true => false", animate("600ms ease-in-out"))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = "app";
  isVisible: boolean = false;
  hungryPerson = "";
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.generateOrders();
  }

  toggleVisibility(): void {
    console.log("toggle called on parent");
    this.isVisible = !this.isVisible;
  }

  addOrder({ main, salads }: { main: string; salads: Array<string> }): void {
    this.ordersService.add({
      main: main,
      salads: salads,
      hungryPerson: this.hungryPerson
    });
    this.toggleVisibility();
  }
}
