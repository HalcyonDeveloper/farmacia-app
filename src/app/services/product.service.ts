import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id_Product: 1, name_Product: 'Paracetamol', needRecepy: false, price: 5.99, quantity: 100 },
    { id_Product: 2, name_Product: 'Antibiótico', needRecepy: true, price: 15.99, quantity: 50 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  updateProductQuantity(id: number, quantity: number): void {
    const product = this.products.find(p => p.id_Product === id);
    if (product) {
      product.quantity -= quantity;
    }
  }
}