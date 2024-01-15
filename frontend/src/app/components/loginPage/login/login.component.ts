import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import { User } from 'src/app/models/user';
import {Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';
import {MatDialog} from "@angular/material/dialog";
import { RegisterComponent } from '../register/register.component';
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  openLoginModal: boolean = false;
  currentUser: User | undefined;
  roleError: boolean = false;


  loginForm = this.fb.group({
    usernameOrEmail: ['', Validators.required],
    username:['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],

  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private state: State,
    public router: Router,
    private dialog:MatDialog,
    private snackBar: MatSnackBar,
    private errorService: ErrorService
  ) {}


  ngOnInit(): void {
    this.openLoginModal= true;}

  async login() {
    try {
      const observable = this.http.post<any>
      (environment.BASE_URL + '/login', this.loginForm.getRawValue())

      const response = await firstValueFrom(observable);

      // Update the currentUser with the responseData from the server
      this.currentUser = response.responseData;

      //check succesfuly login
      if (this.currentUser !== undefined) {
        this.state.setCurrentUser(this.currentUser);

        const selectedRole = this.loginForm.get('role')?.value;

        if (selectedRole === 'admin') {
          this.navigateToAdmin();
        } else if (selectedRole === 'user') {
          this.navigateToUser();
        }
        this.errorService.showSuccessMessage('Successfully logged in!');
        localStorage.setItem('token', response.token);

      }

    } catch (error) {
      this.errorService.handleHttpError(error);
      this.errorService.showValidationError('Please fill in all fields correctly!')
    }
  }


  private navigateToAdmin() {
    this.router.navigate(['/main']);
  }

  private navigateToUser() {
    this.router.navigate(['/home']);
  }
  register(){
    const dialogRef = this.dialog.open(RegisterComponent, {});
    dialogRef.afterClosed().subscribe(result => {

    });


  }

}

 /* async getUserByRole(role: string): Promise<User> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<User>>(
          `${environment.BASE_URL}/api/role?role=${role}`
        )
      );

      const user: User = res.responseData;
      this.state.currentRole = role;


      this.state.setCurrentUser(user);

      return user;

    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while fetching user', error);
      }
      throw error;
    }
  }
*/

