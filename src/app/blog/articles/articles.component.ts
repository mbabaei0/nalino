import {
    Component,
    OnInit,
    HostListener,
    ViewChild,
    ElementRef,
    Renderer2,
    OnDestroy
} from '@angular/core';



@Component({
    selector: 'app-articles-page',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    
})
export class ArticlesPageComponent implements OnInit , OnDestroy {
    

    @ViewChild('nav', { static: false }) nav;
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
        const verticalOffset =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        // console.log(verticalOffset)
        // console.log(this.nav)
        if (verticalOffset > 55) {
            this.renderer.addClass(this.nav.nativeElement, 'fix');
            document.body.style.paddingTop = '6.3rem';
        }
        // if(verticalOffset == 47){
        //     this.renderer.addClass(this.nav.nativeElement, 'fix');
        //     window.scroll(0,55);
        // }
        if (verticalOffset < 55) {
            this.renderer.removeClass(this.nav.nativeElement, 'fix');
            document.body.style.paddingTop = '0';
        }
    }
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {
        
    }
    ngOnDestroy() {
       
    }
    
    next() {
        console.log('next');
    }
    prev() {
        console.log('next');
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
