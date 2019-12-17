import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanisonComponent } from './expanison.component';

describe('ExpanisonComponent', () => {
  let component: ExpanisonComponent;
  let fixture: ComponentFixture<ExpanisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
