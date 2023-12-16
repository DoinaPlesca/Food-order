import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'

})
export class CartComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CartComponent>,
    private cartService : CartService
  ) {}
  ngOnInit(): void {


  }


  decrementQuantity(product: Product) {
    if (product && product.quantity && product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementQuantity(product: Product) {
    if (product && product.quantity) {
      product.quantity++;
    }
  }

  removeFromCart(product: Product) {

    this.cartService.removeFromCart(product);
  }

  closeCart() {
    this.dialogRef.close();
  }


}
