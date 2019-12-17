import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
empty = false;
tab = 1;
  constructor() { }

  ngOnInit() {
  }
  setTab(num: number) {
    this.tab = num;
  }
}
