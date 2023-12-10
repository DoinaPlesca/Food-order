import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { CategoryService } from 'src/app/services/categoryService';
import { ErrorService } from 'src/app/services/errorService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { State } from 'src/app/services/state';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',

})
export class CreateCategoryComponent implements OnInit{
  categories: Category[] = [];
  selectedCategory: string = '';
  openCategoryModal: boolean = false;
  isEditMode: boolean = false;


  categoryForm = this.fb.group({
    categoryName: ['', [Validators.required, Validators.minLength(5)]],
    categoryImageUrl: ['', Validators.required],
  });


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private state: State,
    public router: Router,
    private toastr: ToastrService,
    private errorService: ErrorService,
    private categoryService: CategoryService,
    private sharedService: SharedProductCategoryService

  ) {
    /*this.categoryForm = this.fb.group({
      categoryName :'',
      categoryImageUrl: '' ,
    });*/
  }

  ngOnInit(): void {
    this.sharedService.selectedItem$.subscribe((selectedItem) => {
      if (selectedItem) {
        this.isEditMode = true;
        this.loadCategoryForEditing(selectedItem);
      } else {
        this.isEditMode = false;
      }
      this.openCategoryModal = true;
    });
  }

  async loadCategoryForEditing(selectedItem: Category | Product): Promise<void> {
    try {
      const categoryId = this.sharedService.isProduct(selectedItem) ? selectedItem.productId : selectedItem.categoryId;

      if (categoryId !== undefined) {
        const categoryData = await this.categoryService.getCategoryById(categoryId);

        console.log(categoryData);
        
        if (categoryData) {
          this.categoryForm.patchValue({
            categoryName: categoryData.categoryName,
            categoryImageUrl: categoryData.categoryImageUrl,
          });
        }
      } else {
        console.error('Category ID is undefined. Cannot load category data for editing.');
      }
    } catch (error) {
      console.error('Failed to load category data for editing', error);

      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while loading category data', error);
      }
    }
  }




  async saveCategory(): Promise<void> {
    if (this.categoryForm.valid) {
      try {
        const categoryData = this.categoryForm.getRawValue();
        const savedCategory = await this.categoryService.saveCategory(categoryData);

        if (savedCategory) {
          this.state.categories.push(savedCategory);
          this.errorService.showCategorySuccess();
          this.router.navigate(['/main.html']);
        }
      } catch (e) {
        if (e instanceof HttpErrorResponse) {
          this.errorService.handleHttpError(e);
        } else {
          console.error('An unexpected error occurred', e);
        }
      }
    } else {
      this.errorService.showCategoryError('Please provide all the required values!');
    }
  }

  cancel() {
    this.categoryForm.reset();
    this.openCategoryModal = false;
    this.router.navigate(['/main.html']);
  }

  get errorControl() {
    return this.categoryForm.controls;
  }


}
