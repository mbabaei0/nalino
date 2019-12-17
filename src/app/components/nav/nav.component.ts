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
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    animations: [
        trigger('search', [
            transition(':enter', [
                style({ transform: 'translateY(-200px)', opacity: 0 }), // initial
                animate(
                    '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                    style({ transform: 'translateY(0px)', opacity: 1 })
                ) ,
            ]),
            transition(':leave', [
                group([
                    animate(
                        '0.4s ease',
                        style({ transform: 'translateY(-200px)' })
                    ) ,
                    animate(
                        '0.2s ease',
                        style({  opacity: 0 })
                    ) // final
                ])
            ])
        ]),
        trigger('nav', [
            transition(':enter', [
                style({ transform: 'translateX(50px)', opacity: 0 }), // initial
                animate(
                    '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                    style({ transform: 'translateX(0px)', opacity: 1 })
                ) ,
                // query('@list', stagger(10, animateChild()))
            ]),
            transition(':leave', [
                group([
                    animate(
                        '0.4s ease',
                        style({ transform: 'translateX(50px)' })
                    ) ,
                    animate(
                        '0.2s ease',
                        style({  opacity: 0 })
                    ) // final
                ])
            ])
        ]),
        trigger('items', [
            transition(':enter', [
                style({
                    transform: 'scale(0.5) translateY(-300px) ',
                    opacity: 0
                }), // initial
                animate(
                    '0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                    style({ transform: 'scale(1) ', opacity: 1 })
                ) // final
            ]),
            transition(':leave', [
                style({ transform: 'scale(1) ', opacity: 1 }), // initial
                animate(
                    '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                    style({
                        transform: 'scale(0.5)   translateY(40px)',
                        opacity: 0
                    })
                ) // final
            ])
        ]),
        trigger('singelItem', [
            transition(':enter', [
                style({
                    transform: 'scale(0.5) translateY(-100px) ',
                    opacity: 0
                }), // initial
                animate(
                    '0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                    style({ transform: 'scale(1) ', opacity: 1 })
                ) // final
            ]),
            transition(':leave', [
                style({ transform: 'scale(1) ', opacity: 1 }), // initial
                animate(
                    '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                    style({
                        transform: 'scale(0.5)   translateX(100px)',
                        opacity: 0
                    })
                ) // final
            ])
        ]),
        trigger('list', [
            transition(':enter', [
                query('@items', stagger(100, animateChild())),
            ]),
        ])
    ]
})
export class NavComponent implements OnInit {
    
    searchActive = false;
    notify = false;
    catActive = false;
    catAnimate = false;
    selectedCategory;
    categoryItems = [
        { 
            id: 1,
            state: false,
            title: 'قوری',
            sub: [
                { state: false, id: 1, title: 'چدن' },
                { state: false, id: 2, title: 'روی' }
            ]
        },
        { state: false, id: 2, title: 'کتری', sub: [{ state: false, id: 2, title: 'df' }] },
        {state: false,  id: 4, title: 'کلنگ', sub: [{  state: false,id: 3, title: 'df' }] },
        { state: false, id: 5, title: 'قابلمه', sub: [{ state: false, id: 4, title: 'df' }] }
    ];
    constructor() {}
    ngOnInit() {}


    onSelectCategory(p){
        alert(p.title)
    }
    // selects Main category from list
    selectCategory(item) {
        this.selectedCategory = item;
    }
    // Selects sub category from selected categorey
    selectSubCategory(item) {
        console.log(item);
    }

    openExpansionPanel(i){
        this.categoryItems.forEach((x , index)=> {
            if(i == index){
                x.state = true;
            }else {
                x.state = false;
            }
        })
    }

}
