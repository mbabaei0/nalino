import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { animate, style, group, transition, trigger } from '@angular/animations';
const secondsCounter = interval(5000);
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('img', [
            transition('* <=> *', [
                style({  opacity: 0 }), // initial
                animate(
                    '0.6s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                    style({ transform: 'translateY(0px)', opacity: 1 })
                )
            ]),
            
        ])
    ]
})
export class SliderComponent implements OnInit, OnDestroy {
    sliderItems = [
        { url: 'assets/img/2.jpg' },
        { url: 'assets/img/3.jpg' },
        { url: 'assets/img/1.jpg' },
        { url: 'assets/img/3.jpg' }
    ];
    slide;
    num = 0;
    cunter;
    constructor() {}

    ngOnInit() {
        this.slide = this.sliderItems[0];
        this.cunter = secondsCounter.subscribe(n => {
            if (this.num < this.sliderItems.length - 1) {
                this.num++;
                this.slide = this.sliderItems[this.num];
                console.log(`It's been ${this.num} seconds since subscribing!`);
            } else {
                this.num = 0;
                console.log(this.num);
                this.slide = this.sliderItems[this.num];
            }
        });
    }
    ngOnDestroy() {
        this.cunter.unsubscribe();
    }

    next(){
        if(this.num < this.sliderItems.length - 1) {
            this.num++;
            this.slide = this.sliderItems[this.num];
        }
    }
    prev(){
        if(this.num > 0) {
            this.num--;
            this.slide = this.sliderItems[this.num];
        }

    }
}
