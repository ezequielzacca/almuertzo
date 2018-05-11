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
          'transform': 'translateY(200%)  translateZ(0)'
        })
      ),
      state(
        "true",
        style({
          'transform': 'none'
          
        })
      ),
      transition("false => true", animate("600ms ease-out")),
      transition("true => false", animate("600ms ease-out"))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = "app";
  isVisible:boolean = true;
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.generateOrders();
  }

  toggleVisibility():void{
    console.log('toggle called on parent');
    this.isVisible = !this.isVisible;

  }
}
