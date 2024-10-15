import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.price }}
        <button (click)="editProduct(product)">Edit</button>
      </li>
    </ul>
    <h3>{{ isEditing ? 'Edit' : 'Create' }} Product</h3>
    <input [(ngModel)]="newProduct.name" placeholder="Name">
    <input [(ngModel)]="newProduct.price" placeholder="Price">
    <button (click)="saveProduct()">{{ isEditing ? 'Update' : 'Create' }}</button>
  `
})
export class ProductsComponent {
  products: Product[] = []; // Fetch from service
  newProduct: Product = { name: '', price: 0 };
  isEditing = false;

  editProduct(product: Product): void {
    this.newProduct = { ...product };
    this.isEditing = true;
  }

  saveProduct(): void {
    // Implement save/update logic
    this.isEditing = false;
    this.newProduct = { name: '', price: 0 };
  }
}