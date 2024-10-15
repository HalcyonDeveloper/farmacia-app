import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { RecepiSearchComponent } from './recepi-search/recepi-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent, RecepiSearchComponent],
  standalone: true
})
export class AppComponent {
  title = 'farmacia-app';
}