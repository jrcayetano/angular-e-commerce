import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersItemComponent } from './user-orders-item.component';

describe('UserOrdersItemComponent', () => {
  let component: UserOrdersItemComponent;
  let fixture: ComponentFixture<UserOrdersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrdersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
