import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketListSubtotalComponent } from './basket-list-subtotal.component';

describe('BasketListSubtotalComponent', () => {
  let component: BasketListSubtotalComponent;
  let fixture: ComponentFixture<BasketListSubtotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketListSubtotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketListSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
