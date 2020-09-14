import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferCardComponent } from './product-offer-card.component';

describe('ProductOfferCardComponent', () => {
  let component: ProductOfferCardComponent;
  let fixture: ComponentFixture<ProductOfferCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOfferCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
