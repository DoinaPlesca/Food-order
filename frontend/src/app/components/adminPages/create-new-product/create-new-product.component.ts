import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  productForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(5)]],
    description:['' ,  Validators.required],
    price: ['' , Validators.required],
    quantity: ['' , Validators.required],
    imageUrl: ['', Validators.required],
    categoryId: '',
  })


  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private http: HttpClient,
    private state: State,
    private router: Router,
    private errorService: ErrorService




  ) {
    this.productForm = this.fb.group({
      name :'',
      description: '',
      price: '',
      quantity: '',
      imageUrl: '' ,
      categoryId: '',
    });
  }

  ngOnInit(): void {
    this.loadAllCategories();
    this.openModal= true;
    this.categorySubscription = this.productForm.get('categoryId')?.valueChanges.subscribe((categoryId) => {
      console.log('Selected Category ID:', categoryId);

    });
  }

  cancel() {
    this.productForm.reset();
    this.openModal = false;
    this.router.navigate(['/main.html']);
  }

  async loadAllCategories(): Promise<void> {
    try {
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();
    } catch (error) {
      console.error('Failed to load all categories', error);
    }
  }
  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }



  async saveProduct(): Promise<void> {
    console.log(this.productForm.valid);

    if (this.productForm.valid) {
      try {
        const categoryId = this.productForm.get('categoryId')?.value;

        if (!categoryId) {
          this.errorService.showProductValidationError('Please select a category.');
          return;
        }

        const productData = { ...this.productForm.getRawValue(), categoryId };
        console.log('Request Payload:', productData);

        const observable = this.http.post<ResponseDto<Product>>(
          environment.BASE_URL + '/food/order/new/product',
          productData
        );
        const response = await firstValueFrom(observable);
        if (response && response.responseData) {
          const productWithCategory = { ...response.responseData, category: { categoryId } };

          this.state.products.push(productWithCategory);
          this.errorService.showProductSuccess();
          this.router.navigate(['/main.html']);

        } else {
          this.errorService.showProductError('Failed to get valid response data.');
        }
      } catch (error) {
        this.errorService.showProductError('An error occurred while saving the product.');
      }
    } else {
      this.errorService.showProductValidationError('Please provide all the required values!');
    }
  }


  get errorControl() {
    return this.productForm.controls;
  }
}





