import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @ViewChild('scrollBox', {static: false}) el: ElementRef;
    constructor() {}

    ngOnInit() {}
    scrollLeft() {
        this.el.nativeElement.scrollLeft -= window.innerWidth;
    }
      scrollRight() {
        this.el.nativeElement.scrollLeft += window.innerWidth;
    }
}
