import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private toastr: ToastrService) {}

  handleHttpError(error: HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 400) {
        this.toastr.error('Bad request. Please check your input.', 'Error');
      } else if (error.status === 401) {
        this.toastr.error('Unauthorized. Please log in.', 'Error');
      } else if (error.status === 403) {
        this.toastr.error('Forbidden. You do not have permission to access this resource.', 'Error');
      } else if (error.status === 404) {
        this.toastr.error('Not found. The requested resource does not exist.', 'Error');
      } else if (error.status === 500) {
        this.toastr.error('Internal server error. Please try again later.', 'Error');
      } else {
        this.toastr.error('An unexpected error occurred. Please try again later.', 'Error');
      }
    }
  }
  showCategorySuccess(): void {
    this.showSuccess('Category was successfully created');
  }

  showCategoryError(message: string): void {
    this.showError('Error performing category operation. Please try again.', 'Category Error', message);
  }
  showProductSuccess(): void {
    this.showSuccess('Product was successfully created');
  }

  showProductError(message: string): void {
    this.showError('Error performing product operation. Please try again.', 'Category Error', message);
  }

 showSuccess(message: string): void {
    this.toastr.success(message, 'Success');
  }

  showError(message: string, title: string, additionalMessage?: string): void {
    this.toastr.error(`${message} ${additionalMessage || ''}`, title);
  }

  showProductValidationError(message: string): void {
    this.showError(message, 'Product Validation Error');
  }
}
