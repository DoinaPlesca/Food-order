import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/models/category';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
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
    private errorService: ErrorService



  ) {
    this.categoryForm = this.fb.group({
      categoryName :'',
      categoryImageUrl: '' ,
    });
  }

  ngOnInit(): void {
    this.openCategoryModal= true;
  }

  cancel() {
    this.categoryForm.reset();
    this.openCategoryModal = false;
    this.router.navigate(['/main.html']);
  }


  async saveCategory(): Promise<void> {
    if (this.categoryForm.valid) {
      try {
        const observable = this.http.post<ResponseDto<Category>>(
          environment.BASE_URL + '/food/order/category',
          this.categoryForm.getRawValue()
        );

        const response = await firstValueFrom(observable);

        if (response && response.responseData) {
          this.state.categories.push(response.responseData);
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

  get errorControl() {
    return this.categoryForm.controls;
  }


}
