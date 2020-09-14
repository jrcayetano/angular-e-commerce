import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailReviewsComponent } from './product-detail-reviews.component';

describe('ProductDetailReviewsComponent', () => {
  let component: ProductDetailReviewsComponent;
  let fixture: ComponentFixture<ProductDetailReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
