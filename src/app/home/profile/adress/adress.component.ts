import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit {
ostan = {id:1,title:'قزوین'}
  constructor() { }

  ngOnInit() {
  }

}
