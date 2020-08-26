import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  names = ['nicolas', 'julian', 'pedro'];

  power = 10;


  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.names.push('nuevo item');
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }
}
