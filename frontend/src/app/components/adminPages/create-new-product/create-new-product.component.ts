import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',

})
export class CreateNewProductComponent implements OnInit{
  private categorySubscription: Subscription | undefined
  categories: Category[] = [];
  selectedCategory: string = '';
  openModal: boolean = false;
  isEditMode : boolean= false;
  product: Product | undefined;


  productForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(5)]],
    description:['' ,  Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    imageUrl: ['', Validators.required],
    categoryId: [''],
  });



  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private http: HttpClient,
    private state: State,
    private router: Router,
    private errorService: ErrorService,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.loadAllCategories();
    this.openModal= true;
    this.sharedService.selectedItem$.subscribe((selectedItem) => {
      if (selectedItem) {
        this.isEditMode = true;
        this.loadProductForEditing(selectedItem);
      } else {
        this.isEditMode = false;
      }
      this.openModal= true;
    });
  }

  async loadProductForEditing(selectedItem: Category | Product): Promise<void> {
    try {
      const productId = this.sharedService.isProduct(selectedItem) ? selectedItem.productId : selectedItem.categoryId;

      if (productId !== undefined) {
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
        }
      } else {
        console.error('Item ID is undefined. Cannot load product data for editing.');
      }
    } catch (error) {
      console.error('Failed to load product data for editing', error);

      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while loading product data', error);
      }
    }
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
           const productWithCategory = {...savedProduct, category: {categoryId}};

           this.state.products.push(productWithCategory);
           this.errorService.showProductSuccess();
           this.router.navigate(['/main.html'] );
         }
         else {
           this.errorService.showProductError('Failed to get valid response data.');
         }
       } catch (e) {
         this.errorService.showProductError('An error occurred while saving the product.');
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
      console.error('Failed to load all categories', error);
    }
  }

  get errorControl() {
    return this.productForm.controls;
  }
  cancel() {
    this.productForm.reset();
    this.openModal = false;
    this.router.navigate(['/main.html']);
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }
}





