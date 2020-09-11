import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductBasket } from './../../../../models/product-basket.model';
import {
  IncremenProductQuantity,
  DeleteProduct,
} from './../../../../state/basket.actions';
import { Store } from '@ngrx/store';
import { ProductCard } from './../../../../models/product-card.model';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-basket-list-products',
  templateUrl: './basket-list-products.component.html',
  styleUrls: ['./basket-list-products.component.scss'],
})
export class BasketListProductsComponent implements OnInit, OnChanges {
  @Input() product: ProductBasket;
  quantitiesOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  form: FormGroup;
  constructor(
    private basketStore: Store<{ basket: any }>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.generateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes.product &&
      changes.product.currentValue &&
      this.form
    ) {
      this.form.get('quantity').setValue(changes.product.currentValue);
      console.log(this.form);
    }
  }

  onChangeQuantity(quantity) {
    this.basketStore.dispatch(
      new IncremenProductQuantity({
        productId: this.product.id,
        quantity: parseInt(quantity),
      })
    );
  }

  onDeleteClick() {
    this.basketStore.dispatch(new DeleteProduct(this.product.id));
  }

  private generateForm() {
    return this.fb.group({
      quantity: [this.product.quantity],
    });
  }
}
