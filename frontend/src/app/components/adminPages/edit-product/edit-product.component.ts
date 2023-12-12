import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { ProductService } from 'src/app/services/productService';
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',

})
export class EditProductComponent implements OnInit {
  categories: Category[] = [];
  openEditProductModal: boolean = false;
  productForm: FormGroup;
  product: Product | null = null;



  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    public state: State,
    private router:Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: [''],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const productId = params['id'];
      await this.loadProductForEditing(productId);
    });
    this.loadAllCategories();
  }

  async loadProductForEditing(productId: number): Promise<void> {
    try {
      const productData = await this.productService.getProductById(productId);

      if (productData) {
        this.productForm.patchValue({
          name: productData.name,
          description: productData.description,
          price: productData.price?.toString() || null,
          quantity: productData.quantity?.toString() || null,
          imageUrl: productData.imageUrl,
          categoryId: productData.categoryId?.toString() || null,
        });
      } else {
        console.error('Product data not found for ID:', productId);
      }
    } catch (error) {
      console.error('Failed to load product data for editing', error);
      // Handle error as needed
    }
  }


  async updateProduct() {
    if (this.productForm.valid) {
      const productId: number = this.getProductId();

      if (productId !== undefined) {
        try {
          const productData = await this.productService.getProductById(productId);
          await this.productService.updateProductById(productId, this.productForm.value);
          this.productService.getAllProducts();
          this.cancel()

        } catch (error) {
          console.error('Failed to update product:', error);
        }
      } else {
        console.error('Product ID is undefined. Cannot update product.');
      }
    }
  }
  getProductId(): number {
    const productId = this.route.snapshot.params['id'];
    return productId;

  }

  async loadAllCategories(): Promise<void> {
    try {
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();
    } catch (error) {
      console.error('Failed to load all categories', error);
    }
  }
  cancel() {
    this.resetForm();
    this.openEditProductModal = false;
    this.sharedService.loadAllProducts();this.router.navigate(['/main.html']);


 }
  private resetForm(): void {
    this.productForm.reset();
  }
}



