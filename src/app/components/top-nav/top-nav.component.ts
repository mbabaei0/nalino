import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations:[
    trigger('open', [
        transition(':enter', [
            style({ transform: 'translateY(-100px)', opacity: 0 }), // initial
            animate(
                '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                style({ transform: 'translateY(0px)', opacity: 1 })
            ) ,
        ]),
        transition(':leave', [
            group([
                animate(
                    '0.4s ease',
                    style({ transform: 'translateY(-100px)' })
                ) ,
                animate(
                    '0.1s ease',
                    style({  opacity: 0 })
                ) // final
            ])
        ])
    ]),
  ]
})
export class TopNavComponent implements OnInit {
    acardeon = false;
    @ViewChild('nav',{static: false}) nav;
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
        const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
       // console.log(verticalOffset)
        // console.log(this.nav)
        if(verticalOffset > 47){
            this.renderer.addClass(this.nav.nativeElement, 'fix');
            document.body.style.paddingTop = '9.3rem'
        }
        // if(verticalOffset == 47){
        //     this.renderer.addClass(this.nav.nativeElement, 'fix');
        //     window.scroll(0,55);
        // }
        if(verticalOffset < 47){
            this.renderer.removeClass(this.nav.nativeElement, 'fix');
            document.body.style.paddingTop = '0'
        }
    }
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

}
