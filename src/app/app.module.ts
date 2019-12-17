import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './components/drop-down/dropDown/pipe.pipe';
import { P404Component } from './p404/p404.component';
//import { DropDownComponent } from './components/drop-down/drop-down.component';
//import { ThreeJsComponent } from './components/three-js/three-js.component';

//import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    
  //  DropDownComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    LyThemeModule.setTheme('minima-light')
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
