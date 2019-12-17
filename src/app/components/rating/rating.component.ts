import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    animations: [
        trigger('str', [
          transition('void => *', [
            style({ transform: 'scale3d(.3, .3, .3)rotate(-45deg)' }),
            animate(100),
          ]),
        ]),
      ],
})
export class RatingComponent implements OnInit {

    @Input()show = true;
    @Input()rate = 1;
    emptyA = [];

    constructor() {}

    ngOnInit() {
        this.emptyA = Array(5).fill({ active: false });
        this.onRate(this.rate)
    }
    onRate(number) {
        let empty = Array(5 - number ).fill({ active: false });
        let full = Array(number ).fill({ active: true });
        this.emptyA = [...full, ...empty];
    }
}
