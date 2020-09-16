import { ToastService } from './private-zone/shared/shared/services/toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce';
  constructor(private toastService: ToastService) {}
}
