import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';
import { User } from 'src/app/models/user';
import {MatSnackBar} from "@angular/material/snack-bar";
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { environment } from 'src/app/environments/environment';
import { firstValueFrom } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

function emailDomainValidator(control: AbstractControl): { [key: string]: any } | null {
  const allowedDomains = ['yahoo.com', 'gmail.com'];
  const email = control.value as string;

  if (email) {
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (!allowedDomains.includes(domain.toLowerCase())) {
      return { 'invalidDomain': true };
    }
  }

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements  OnInit{
  openRegisterModal: boolean = false;
  users: User[] = [];
  roles = ['User', 'Admin'];

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email,Validators.minLength(5), emailDomainValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    role: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private state: State,
    public router: Router,
    private errorService: ErrorService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RegisterComponent>

  ) {}
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get role() { return this.registerForm.get('role'); }


  ngOnInit(): void {
    this.openRegisterModal= true;
  }

  async register() {
    if (this.registerForm.valid) {
      try {
        const observable = this.http.post<ResponseDto<User>>(
          `${environment.BASE_URL}/api/register/user`,
          this.registerForm.getRawValue()
        );

        const response = await firstValueFrom(observable);

        if (response && response.responseData) {
          this.state.users.push(response.responseData);
          this.errorService.showSuccessMessage('User registered successfully');
        }

        this.cancel();

      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          this.errorService.handleHttpError(error);
        }
      }
    } else {
      this.snackBar.open('Please provide all the required values!', 'Close', {
        duration: 2000,
        panelClass: ['error-snackbar'],
      });
    }
  }


  cancel(){
    this.dialogRef.close();
  }






}
