import { Injectable } from '@angular/core';
import { Recepi } from '../models/recepi.model';

@Injectable({
  providedIn: 'root'
})
export class RecepiService {
  private recepis: Recepi[] = [
    { id_Recepi: 1, numberRecepi: 'RX001', nameDoctor: 'Dr. Smith', namePaciente: 'John Doe', id_Product: 2, quantity: 1, date_delivery: null }
  ];

  getRecepis(): Recepi[] {
    return this.recepis;
  }

  findRecepi(numberRecepi: string): Recepi | undefined {
    return this.recepis.find(r => r.numberRecepi === numberRecepi);
  }

  updateRecepiDelivery(id: number, date: Date): void {
    const recepi = this.recepis.find(r => r.id_Recepi === id);
    if (recepi) {
      recepi.date_delivery = date;
    }
  }
}