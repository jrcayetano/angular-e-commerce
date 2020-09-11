import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketListProductsComponent } from './basket-list-products.component';

describe('BasketListProductsComponent', () => {
  let component: BasketListProductsComponent;
  let fixture: ComponentFixture<BasketListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
