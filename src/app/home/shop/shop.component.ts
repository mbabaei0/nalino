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
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
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
export class ShopComponent implements OnInit {
    tab = 1;
    count = 1;
    initStep2 = false;
    initStep3 = false;
 // test bind to province
    ostan = {id:4,title:'ddddddd'}


    public addressForm = new FormGroup({
      provinceId: new FormControl("", Validators.required),
    });


  constructor() { }

  ngOnInit() {
  }
  setTab(num: number) {
    this.tab = num;
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
  }

  isSelected(num: number) {
    return this.tab === num;
  }

   onSubmitStep1(){
    
       this.setTab(2)
       this.initStep2 = true;
       
   }
   onSubmitStep2(){
    
    this.setTab(3)
    this.initStep3 = true;
    
   }
   onSubmitFull(){
       
   }

}
