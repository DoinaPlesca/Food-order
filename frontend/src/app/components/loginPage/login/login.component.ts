import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {Role, User, UserResponseDto } from 'src/app/models/user';
import {Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';
import {MatDialog} from "@angular/material/dialog";
import { RegisterComponent } from '../register/register.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import { TokenService } from 'src/app/services/TokenService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    openLoginModal: boolean = false;
    currentUser: User | undefined;
    roleError: boolean = false;


    loginForm = this.fb.group({
        usernameOrEmail: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],

    });

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private state: State,
        public router: Router,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private errorService: ErrorService,
        private tokenService: TokenService
    ) {
    }


    ngOnInit(): void {
        this.openLoginModal = true;
    }



    async login() {
        try {
            const url = environment.BASE_URL + '/login';

            const response = await firstValueFrom
            (this.http.post<ResponseDto<{ token: string }>>(url, this.loginForm.value));

            console.log('Full Response:', response);


            if (response.messageToClient === 'Login successful' && response.responseData?.token) {

                this.tokenService.setToken(response.responseData!.token);
                console.log('Token set:', response.responseData!.token);


                const decodedToken = this.tokenService.getDecodedToken();

                console.log('Decoded Token:', decodedToken);

                if (decodedToken && decodedToken.role) {
                    console.log('User Role:', decodedToken.role);


                    if (decodedToken.role === 'Admin') {
                        this.navigateToAdmin();


                    } else if (decodedToken.role === 'User') {
                        this.navigateToUser();


                    } else {
                        console.error('Unexpected role:', decodedToken.role);
                    }

                    await this.errorService.showSuccessMessage('Successfully logged in!');
                }
            } else {
                console.error('Unexpected response:', response);
            }
        } catch (error) {
            console.error('Login Error:', error);
            this.errorService.handleHttpError(error);
            this.errorService.showValidationError('Please fill in all fields correctly!');
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

