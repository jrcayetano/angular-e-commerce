import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersProductComponent } from './user-orders-product.component';

describe('UserOrdersProductComponent', () => {
  let component: UserOrdersProductComponent;
  let fixture: ComponentFixture<UserOrdersProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrdersProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrdersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
