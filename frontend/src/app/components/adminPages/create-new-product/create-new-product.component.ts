import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import {Subscription, firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { ErrorService } from 'src/app/services/errorService';
import { ProductService } from 'src/app/services/productService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { State } from 'src/app/services/state';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',

})
export class CreateNewProductComponent implements OnInit {
  private selectedItemSubscription: Subscription = new Subscription();
  categories: Category[] = [];
  selectedCategory: string = '';
  openModal: boolean = false;
  product: Product | undefined;


  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    imageUrl: ['', Validators.required],
    categoryId: [''],
  });


  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private state: State,
    private router: Router,
    private errorService: ErrorService,
    public dialogRef: MatDialogRef<CreateNewProductComponent>

  ) {}

  ngOnInit(): void {
    this.loadAllCategories();
    this.openModal = true;
  }


  async saveProduct(): Promise<void> {
    if (this.productForm.valid) {
      try {
        const categoryId = this.productForm.get('categoryId')?.value;

        if (!categoryId) {
          this.errorService.showProductValidationError('Please select a category.');
          return;
        }

        const productData = { ...this.productForm.getRawValue(), categoryId };
        console.log('Request Payload:', productData);

        const savedProduct = await this.productService.saveProduct(productData);

        if (savedProduct) {
          const productWithCategory = { ...savedProduct, category: { categoryId } };
          this.state.products.push(productWithCategory);
          this.errorService.showSuccessMessage('Successfully created!');
          this.cancel();
        }
      } catch (error) {
        console.error('An error occurred while saving the product:', error);
        this.errorService.handleHttpError(error);
      }
    } else {
      this.errorService.showProductValidationError('Please provide all the required values!');
    }
  }


  async loadAllCategories(): Promise<void> {
    try {
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();
    } catch (error) {
     this.errorService.handleHttpError(error);
    }
  }

  get errorControl() {
    return this.productForm.controls;
  }

  cancel() {
    this.resetForm();
    this.openModal = false;
    this.dialogRef.close();
    this.router.navigate(['/main']);

  }


  resetForm(): void {
    this.productForm.reset();
  }

}





