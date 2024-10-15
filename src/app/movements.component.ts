import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movement {
  type: string;
  product: string;
  quantity: number;
  client: string;
  recipe?: string;
  date: Date;
}

@Component({
  selector: 'app-movements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Product Movements</h2>
    <input [(ngModel)]="productSearch" placeholder="Search by product">
    <input [(ngModel)]="recepeSearch" placeholder="Search by recepe">
    <table>
      <tr>
        <th>Type</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Client</th>
        <th>Recipe</th>
        <th>Date</th>
      </tr>
      <tr *ngFor="let movement of filteredMovements()">
        <td>{{ movement.type }}</td>
        <td>{{ movement.product }}</td>
        <td>{{ movement.quantity }}</td>
        <td>{{ movement.client }}</td>
        <td>{{ movement.recipe || 'N/A' }}</td>
        <td>{{ movement.date | date }}</td>
      </tr>
    </table>
  `
})
export class MovementsComponent {
  movements: Movement[] = []; // Fetch from service
  productSearch = '';
  recepeSearch = '';

  filteredMovements(): Movement[] {
    return this.movements.filter(m => 
      m.product.toLowerCase().includes(this.productSearch.toLowerCase()) &&
      (m.recipe?.toLowerCase().includes(this.recepeSearch.toLowerCase()) || !this.recepeSearch)
    );
  }
}