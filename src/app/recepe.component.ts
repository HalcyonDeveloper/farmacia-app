import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Recepe {
  name: string;
}

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-recepe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Recepes</h2>
    <ul>
      <li *ngFor="let recepe of recepes">{{ recepe.name }}</li>
    </ul>
    <h3>Create New Recepe</h3>
    <select [(ngModel)]="selectedProduct">
      <option *ngFor="let product of products" [value]="product.id">{{ product.name }}</option>
    </select>
    <button (click)="createRecepe()">Create Recepe</button>
  `
})
export class RecepeComponent {
  recepes: Recepe[] = []; // Fetch from service
  products: Product[] = []; // Fetch from service
  selectedProduct: string = '';

  createRecepe() {
    // Implement creation logic
  }
}