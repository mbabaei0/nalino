import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { animate, style, group, transition, trigger } from '@angular/animations';
const secondsCounter = interval(5000);

@Component({
  selector: 'app-kitchen-news',
  templateUrl: './kitchen-news.component.html',
  styleUrls: ['./kitchen-news.component.scss'],
  animations: [
    trigger('img', [
        transition('* <=> *', [
            style({  opacity: 0,transform: 'translateX(200px)' }), // initial
            animate(
                '0.6s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                style({ transform: 'translateX(0px)', opacity: 1 })
            )
        ]),
        
    ])
]
})
export class KitchenNewsComponent implements OnInit, OnDestroy {

    sliderItems = [
        { url: 'assets/img/food1.jpeg' , title:'غذای ژاپنی' , text:' متن لورم لورم لومرم'},
        { url: 'assets/img/food2.jpeg', title:'دستور کیک' , text:' متن لورم لورم لومرم' },
        { url: 'assets/img/food3.jpeg' , title:'ذای ژاپنیدس' , text:' متن لورم لورم لومرم'},
        { url: 'assets/img/food4.jpeg' , title:'املت اسپانیایی ایتالین' , text:' متن لورم لورم لومرم'}
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
