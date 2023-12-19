import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {firstValueFrom, Subscription} from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { CategoryService } from 'src/app/services/categoryService';
import { ErrorService } from 'src/app/services/errorService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { State } from 'src/app/services/state';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',

})
export class CreateCategoryComponent implements OnInit{
  private selectedItemSubscription: Subscription = new Subscription();
  categories: Category[] = [];
  selectedCategory: string = '';
  openCategoryModal: boolean = false;



  categoryForm = this.fb.group({
    categoryName: ['', [Validators.required, Validators.minLength(5)]],
    categoryImageUrl: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private state: State,
    public router: Router,
    private errorService: ErrorService,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateCategoryComponent>,




  ) {}

  ngOnInit(): void {
    this.openCategoryModal = true;
  }

  async saveCategory(): Promise<void> {
    if (!this.categoryForm.valid) {
      this.errorService.showInvalidFormError();
      return;
    }

    try {
      const categoryData = this.categoryForm.getRawValue();
      const savedCategory = await this.categoryService.saveCategory(categoryData);

      if (savedCategory) {
        this.state.categories.push(savedCategory);
        this.errorService.showSuccessMessage('Category has been successfully created');
        this.cancel();
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred', error);
      }
    }
  }

  cancel() {
    this.categoryForm.reset();
    this.openCategoryModal = false;
    this.dialogRef.close();
    this.router.navigate(['/main']);

  }


  ngOnDestroy(): void {
    this.selectedItemSubscription.unsubscribe();
  }


}
