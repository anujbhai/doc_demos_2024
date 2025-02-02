import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }
}
