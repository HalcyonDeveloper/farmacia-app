import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recepi } from '../models/recepi.model';
import { RecepiService } from '../services/recepi.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-recepi-search',
  templateUrl: './recepi-search.component.html',
  styleUrls: ['./recepi-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RecepiSearchComponent {
  searchTerm: string = '';
  foundRecepi: Recepi | undefined;
  message: string = '';

  constructor(
    private recepiService: RecepiService,
    private productService: ProductService
  ) { }

  searchRecepi(): void {
    this.foundRecepi = this.recepiService.findRecepi(this.searchTerm);
    if (!this.foundRecepi) {
      this.message = 'Receta no encontrada';
    } else {
      this.message = '';
    }
  }

  deliverMedicine(): void {
    if (this.foundRecepi && !this.foundRecepi.date_delivery) {
      const product = this.productService.getProducts().find(p => p.id_Product === this.foundRecepi!.id_Product);
      if (product && product.quantity >= this.foundRecepi.quantity) {
        this.productService.updateProductQuantity(this.foundRecepi.id_Product, this.foundRecepi.quantity);
        this.recepiService.updateRecepiDelivery(this.foundRecepi.id_Recepi, new Date());
        this.message = 'Medicamento entregado con éxito';
      } else {
        this.message = 'No hay suficiente stock para entregar el medicamento';
      }
    } else if (this.foundRecepi?.date_delivery) {
      this.message = 'Esta receta ya ha sido entregada';
    }
  }
}