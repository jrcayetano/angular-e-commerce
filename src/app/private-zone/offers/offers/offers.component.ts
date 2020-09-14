import { SetMenu } from './../../../state/app.actios';
import { MenuEnum } from './../../../consts/menu.enum';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  menuName = MenuEnum.Offers;
  constructor(
    private appStore: Store<{ app }>,
    private basketStore: Store<{ basket }>
  ) {}

  ngOnInit(): void {
    /*  this.selectMenu(); */
  }

  /*  private selectMenu() {
    this.appStore.dispatch(new SetMenu(this.menuName));
  } */
}
