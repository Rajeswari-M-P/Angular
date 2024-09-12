// src/app/product.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: { name: string; productColor: string; productQuantity: number }[] = [];
  private productsSubject = new BehaviorSubject<{ name: string; productColor: string; productQuantity: number }[]>([]);

  products$ = this.productsSubject.asObservable();

  constructor() { }

  // Add a new product
  addProduct(product: { name: string; productColor: string; productQuantity: number }): void {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  // Get all products
  getProducts(): { name: string; productColor: string; productQuantity: number }[] {
    return this.products;
  }

  // Delete a product
  deleteProduct(product: { name: string; productColor: string; productQuantity: number }): void {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.productsSubject.next(this.products);
    }
  }

  // Edit a product
  editProduct(oldProduct: { name: string; productColor: string; productQuantity: number }, newProduct: { name: string; productColor: string; productQuantity: number }): void {
    const index = this.products.indexOf(oldProduct);
    if (index > -1) {
      this.products[index] = newProduct;
      this.productsSubject.next(this.products);
    }
  }
}
