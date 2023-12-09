import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Subscription, firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
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
    public router: Router,



  ) {
    this.productForm = this.fb.group({
      name :'',
      description: '',
      price: '',
      quantity: '',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663852705829-aa8707495e2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D' ,
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
          console.error('Please select a category.');
          return;
        }
        this.productForm.get('imageUrl')?.value;
        const imageUrl= this.productForm.get('imageUrl')?.value;

        console.log(imageUrl);

        const productData = { ...this.productForm.getRawValue(), categoryId };
        console.log('Request Payload:', productData);

        const observable = this.http.post<ResponseDto<Product>>(
          environment.BASE_URL + '/food/order/new/product',
          productData
        );

        const response = await firstValueFrom(observable);

        if (response && response.responseData) {
          // Update the product's category information
          const productWithCategory = { ...response.responseData, category: { categoryId } };

          // Push the updated product to the state
          this.state.products.push(productWithCategory);

          console.log('Product created successfully:', productWithCategory);
        } else {
          console.error('Failed to get valid response data.');
        }
      } catch (error) {
        console.error('An error occurred while saving the product:', error);
      }
    } else {
      console.log('Please provide all the required values!');
    }
  }


  get errorControl() {
    return this.productForm.controls;
  }
}





