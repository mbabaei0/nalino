import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
    expand = false;
    categoryItems = [
        { 
            id: 1,
            state: false,
            title: 'تهران',
            img:'assets/img/tehran.jpg',
            sub: [
                {  id: 1, title: 'شهروند' },
                { id: 2, title: 'نجم' }
            ]
        },
        { state: false, id: 2, title: 'اصفهان',img:'assets/img/a.jpg', sub: [{ state: false, id: 2, title: 'df' }] },
        {state: false,  id: 4, title: 'اراک',img:'assets/img/c.jpg', sub: [{  state: false,id: 3, title: 'df' }] },
        { state: false, id: 5, title: 'قوچان',img:'assets/img/11.jpg', sub: [{ state: false, id: 4, title: 'df' }] }
    ];
  constructor() { }

  ngOnInit() {
  }
  openExpansionPanel(i){
    this.categoryItems.forEach((x , index)=> {
        if(i == index){
            if(x.state){
                x.state = false;
            }
            else{
                x.state = true;
            }
        }else {
            x.state = false;
        }
    })
}
}
