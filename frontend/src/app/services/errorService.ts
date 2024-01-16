import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {IndividualConfig, ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) {
  }

  showInvalidFormError(): void {
    this.snackBar.open('Invalid form. Please check your input.', 'Error', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'error-snackbar',

    });
  }
  showValidationError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'error-snackbar',
    });
  }
  showProductValidationError(message: string): void {
    this.snackBar.open(message, 'Error', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'error-snackbar',
    });
  }

  handleHttpError(error: any, position?: SnackBarPosition): void {
    if (error instanceof HttpErrorResponse) {
      const message = this.getErrorMessage(error);
      this.showSnackBar(message, 'Error', position);
    } else {
      this.showSnackBar('An unexpected error occurred. Please try again later.', 'Error', position);
    }
  }

  showSuccessMessage(message: string, position?: SnackBarPosition): void {
    this.showSnackBar(message, 'Success', position);
  }

  public showSnackBar(message: string, panelClass: string, position?: SnackBarPosition): void {
    this.snackBar.open(message, panelClass, {
      duration: 5000,
      horizontalPosition: position?.horizontal || 'center',
      verticalPosition: position?.vertical || 'top',
    });
  }

  public getErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return 'Bad request. Please check your input.';
      case 401:
        return 'Unauthorized. Please log in.';
      case 403:
        return 'Forbidden. You do not have permission to access this resource.';
      case 404:
        return 'Not found. The requested resource does not exist.';
      case 500:
        return 'Internal server error. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again later.';
    }
  }
}

interface SnackBarPosition {
  horizontal?: MatSnackBarHorizontalPosition;
  vertical?: MatSnackBarVerticalPosition;
}

