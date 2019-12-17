import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { ExpanisonComponent } from '../components/expanison/expanison.component';
import { ThreeJsComponent } from '../components/three-js/three-js.component';
import { DropDownComponent } from '../components/drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';
import { PipePipe } from '../components/drop-down/dropDown/pipe.pipe';
import { FooterComponent } from '../components/footer/footer.component';
import { ModalComponent } from '../components/modal/modal.component';


@NgModule({
  declarations: [
      TopNavComponent,
      ExpanisonComponent,
      ThreeJsComponent,
      DropDownComponent,
      PipePipe,
      FooterComponent,
      ModalComponent
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TopNavComponent,
    ExpanisonComponent,
    ThreeJsComponent,
    DropDownComponent,
    PipePipe,
    FooterComponent,
    ModalComponent
  ]
})
export class SharedModule { }
