import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  star = faStar;
  starHalf = faStarHalfAlt;

  numberPart = 0;
  decimalPart = 0;
  starsNumber = 5;
  constructor() {}

  ngOnInit(): void {
    this.calculateRating(this.rating);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.rating && changes.rating.currentValue) {
      this.calculateRating(changes.rating.currentValue);
    }
  }

  private calculateRating(rating: number): void {
    if (!this.rating || Number.isNaN(this.rating)) {
      return;
    }
    this.numberPart = Math.floor(this.rating);
    this.decimalPart = rating - this.numberPart;
  }
}
