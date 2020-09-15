import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  form: FormGroup;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  faCross = faTimes;
  isOpened = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.generateForm();
    this.form.valueChanges
      .pipe(filter((e) => !(e instanceof Event)))
      .subscribe((formValues) => {
        console.log('eeeee', formValues);
        if (!(formValues instanceof Event)) {
          this.change.emit(formValues);
        }
      });
  }

  onStarsClick(starsQuantity = 0) {
    this.form.get('rating').setValue(starsQuantity);
  }

  onCloseClick() {
    this.isOpened = false;
  }
  filter() {
    this.isOpened = true;
  }

  private generateForm() {
    return this.fb.group({
      searchTerm: [''],
      clock: [false],
      light: [false],
      player: [false],
      mouse: [false],
      min: [],
      max: [],
      rating: [],
    });
  }
}
