import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: any[] = [
    { id: 1, name: "Gama Kuyil", price: 2700, },
    { id: 2, name: "Pilot Elite", price: 8500, },
    { id: 3, name: "Lamy 2000", price: 18000, },
  ];

  constructor() { }

  getAllProducts() {
    return of(this.data);
  }

  getProductById(id: number) {
    return of(this.data.find(p => p.id === id));
  }
}
