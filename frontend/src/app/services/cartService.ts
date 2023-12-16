

import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  constructor() { }
  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getCartItems(): Observable<Product[]> {
    return this.cartItemsSubject.asObservable();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]);
  }

  removeFromCart(product: Product): void {
    console.log('Removing from cart:', product);
    const index = this.cartItems.findIndex(item => item.productId === product.productId);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next([...this.cartItems]);
    }
  }





}
