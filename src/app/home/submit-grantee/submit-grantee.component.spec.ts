import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGranteeComponent } from './submit-grantee.component';

describe('SubmitGranteeComponent', () => {
  let component: SubmitGranteeComponent;
  let fixture: ComponentFixture<SubmitGranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitGranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
