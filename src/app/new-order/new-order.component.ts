import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  mains = [
    {value: 'Mila', viewValue: 'Mila'},
    {value: 'Suprema', viewValue: 'Suprema'},
    {value: 'Napo', viewValue: 'Napo'}
  ];

  salads = [
    {value: 'Chaucha', viewValue: 'Chaucha'},
    {value: 'Coreanito', viewValue: 'Coreanito'},
    {value: 'Zapallito', viewValue: 'Zapallito'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
