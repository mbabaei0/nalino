import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-expanison',
  templateUrl: './expanison.component.html',
  styleUrls: ['./expanison.component.scss'],
  animations: [
    trigger('anim', [
        transition(':enter', [
            style({  opacity: 0 , height: '0rem' }), // initial
            animate(
                '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                style({ opacity: 1,height: '*' })
            ) ,
        ]),
        transition(':leave', [
            group([
                animate(
                    '0.4s ease',
                    style({  height: '0rem' , transform:'scale(0)' })
                ) ,
                animate(
                    '0.3s ease',
                    style({  opacity: 0 })
                ) // final
            ])
        ])
    ]),
  ],
})
export class ExpanisonComponent implements OnInit { 
    @Input()expand = false;
  constructor() { }

  ngOnInit() {
  }

}
