import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { Category } from 'src/app/models/category';
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';
import { CategoryService } from 'src/app/services/categoryService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit {
  categories: Category[] = [];
  openEditCategoryModal: boolean = false;
  categoryForm: FormGroup;
  category: Category | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public state: State,
    public router: Router,
    private toastr: ToastrService,
    private errorService: ErrorService,
    private categoryService: CategoryService,
    private sharedService: SharedProductCategoryService,
    private route: ActivatedRoute,

  ) {
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(5)]],
      categoryImageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const categoryId = params['id'];
      await this.loadCategoryForEditing(categoryId);
    });

  }



  async loadCategoryForEditing(categoryId: number): Promise<void> {
    try {
      const categoryData = await this.categoryService.getCategoryById(categoryId);

      if (categoryData) {
        console.log('Category Data:', categoryData);
          this.categoryForm.patchValue({
            categoryName: categoryData.categoryName,
            categoryImageUrl: categoryData.categoryImageUrl,
          });

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

  async updateCategory() {
    if(this.categoryForm.valid) {
      const categoryId: number = this.getCategoryId();

      if(categoryId !== undefined) {
        try{
          const categoryData = await this.categoryService.getCategoryById(categoryId);
          await this.categoryService.updateCategoryById(categoryId, this.categoryForm.value);

          this.categoryService.getAllCategories();
          this.cancel()

        } catch (error) {
          console.error('Failed to update category:', error);
        }
      } else {
        console.error('Category ID is undefined. Cannot update category.');
      }
    }
  }

  getCategoryId(): number {
    const categoryId = this.route.snapshot.params['id'];
    return categoryId;
  }
  resetForm(): void {
    this.categoryForm.reset();
  }

  cancel() {
    this.resetForm();
    this.openEditCategoryModal = false;
    this.sharedService.loadAllCategories();this.router.navigate(['/main.html']);

  }

  get errorControl() {
    return this.categoryForm.controls;
  }
}
