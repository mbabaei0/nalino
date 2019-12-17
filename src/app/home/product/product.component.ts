import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
    trigger,
    transition,
    style,
    animate,
    query,
    stagger,
    animateChild,
    keyframes,
    group
} from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations:[
    trigger('tab', [
        transition(':enter', [
            style({ transform: 'translateX(200px)', opacity: 0 }), // initial
            animate(
                '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                style({ transform: 'translateX(0px)', opacity: 1 })
            ) ,
        ]),
        // transition(':leave', [
        //     group([
        //         animate(
        //             '0.4s ease',
        //             style({ transform: 'translateX(200px)' })
        //         ) ,
        //         animate(
        //             '0.2s ease',
        //             style({  opacity: 0 })
        //         ) // final
        //     ])
        // ])
    ]),
  ]
})
export class ProductComponent implements OnInit,AfterViewInit {
remindMeModal = false;

count = 1;
tab = 1;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }
  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

  closeModal(ev){
    this.remindMeModal = ev;
  }
}
