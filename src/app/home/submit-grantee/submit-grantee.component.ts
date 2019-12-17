import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-grantee',
  templateUrl: './submit-grantee.component.html',
  styleUrls: ['./submit-grantee.component.scss']
})
export class SubmitGranteeComponent implements OnInit {
    allertMeModal = true;
  constructor() { }

  ngOnInit() {
  }
  closeModal($event){}

}
