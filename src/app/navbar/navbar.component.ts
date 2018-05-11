import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() hungryDude:string = '';
  @Output() hungryDudeChange = new EventEmitter();
  @Output("onToggleAdd") onToggleAdd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleAdd():void{
    console.log('toggle called on child');
    this.onToggleAdd.emit('toggle');
  }

  changeName(event){
    this.hungryDudeChange.emit(event.target.value);
  }

}
