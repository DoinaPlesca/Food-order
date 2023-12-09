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

  showSuccess(message: string, title: string = 'Success', options?: Partial<IndividualConfig>): void {
    this.toastr.success(message, title, options);
  }


  showError(message: string, title: string = 'Error', options?: Partial<IndividualConfig>): void {
    this.toastr.error(message, title, options);
  }

  showFileError(): void {
    this.showError('Error uploading file. Please try again.', 'File Error', { timeOut: 5000 });
  }

  showCategorySuccess(): void {
    this.showSuccess('Category was successfully created', 'Success', {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      toastClass: 'custom-toast-success',
      positionClass: 'toast-top-center'
    });
  }
  showCategoryError(): void {
    this.showError('Error performing category operation. Please try again.', 'Category Error', {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      toastClass: 'custom-toast-error',
      positionClass: 'toast-top-center'
    });
  }


}
