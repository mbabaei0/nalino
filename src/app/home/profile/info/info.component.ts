import { Component, OnInit } from '@angular/core';
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
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
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
export class InfoComponent implements OnInit {

    tab = 1;
    constructor() { }
  
    ngOnInit() {
    }
    setTab(num: number) {
      this.tab = num;
    }

}
