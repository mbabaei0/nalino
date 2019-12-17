import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
@Input()closable = true;
@Input()gallary = false; 
  @Input()visible = false;
  @Output()visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
   // @Output('close')closeOutput = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
