import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteProductsComponent } from './user-favorite-products.component';

describe('UserFavoriteProductsComponent', () => {
  let component: UserFavoriteProductsComponent;
  let fixture: ComponentFixture<UserFavoriteProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavoriteProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
