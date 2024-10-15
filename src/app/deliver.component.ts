import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-deliver',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Deliver</h2>
    <input [(ngModel)]="recepeNumber" placeholder="Enter recepe number">
    <button (click)="searchRecepe()">Search</button>
    <ul *ngIf="productsToDeliver.length">
      <li *ngFor="let product of productsToDeliver">
        {{ product.name }} - Quantity: {{ product.quantity }}
      </li>
    </ul>
    <button *ngIf="productsToDeliver.length" (click)="deliverProducts()">Deliver and Update Stock</button>
  `
})
export class DeliverComponent {
  recepeNumber = '';
  productsToDeliver: Product[] = [];

  searchRecepe() {
    // Implement search logic
  }

  deliverProducts() {
    // Implement delivery and stock update logic
  }
}