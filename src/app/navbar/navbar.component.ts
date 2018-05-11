import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output("onToggleAdd") onToggleAdd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleAdd():void{
    console.log('toggle called on child');
    this.onToggleAdd.emit('toggle');
  }

}
