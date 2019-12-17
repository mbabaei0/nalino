import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { animate, style, group, transition, trigger } from '@angular/animations';
const secondsCounter = interval(5000);

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
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
export class ImgSliderComponent implements OnInit , OnDestroy {

    sliderItems = [
        { url: 'assets/img/items/cast-pan-1.png' },
        { url: 'assets/img/items/feleti-20-2.png' },
        { url: 'assets/img/items/kids-2.png' },
        { url: 'assets/img/items/feleti-20-2.png' },
        { url: 'assets/img/items/kids-2.png' },
        { url: 'assets/img/items/cast-pan-1.png' },
        
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
            } else {
                this.num = 0;
                this.slide = this.sliderItems[this.num];
            }
        });
    }
    ngOnDestroy() {
        this.cunter.unsubscribe();
    }
    setItem(i){
        this.num = i ;
        this.slide = this.sliderItems[i];
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

