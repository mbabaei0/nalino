import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenNewsComponent } from './kitchen-news.component';

describe('KitchenNewsComponent', () => {
  let component: KitchenNewsComponent;
  let fixture: ComponentFixture<KitchenNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
