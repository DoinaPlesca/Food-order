import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import { User } from 'src/app/models/user';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ResponseDto } from 'src/app/models/responsiveHelper/responseDto';
import { State } from 'src/app/services/state';
import { ErrorService } from 'src/app/services/errorService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  openLoginModal: boolean = false;
  currentUser: User | undefined;

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
    private toastr: ToastrService,
    private errorService: ErrorService,

  ) {}


  ngOnInit(): void {
    this.openLoginModal= true;}

    async login() {
      try {
        const observable = this.http.post<ResponseDto<User>>
        (environment.BASE_URL + '/api/login', this.loginForm.getRawValue())

        const response = await firstValueFrom(observable);

        this.currentUser = response.responseData;

        if (this.currentUser !== undefined) {
          this.state.setCurrentUser(this.currentUser);

          const selectedRole = this.loginForm.get('role')?.value;

          if (selectedRole === 'admin') {
            this.navigateToAdmin();
          } else if (selectedRole === 'user') {
            this.navigateToUser();
          }

        }
        const toast = this.toastr.success('SUCCESS LOGIN');
      } catch (e) {
        // Handle errors if necessary
      }
    }

  private navigateToAdmin() {

    this.router.navigate(['/main.html']);
  }

  private navigateToUser() {

    this.router.navigate(['/home.html']);
  }

  async getUserByRole(role: string): Promise<User> {
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



  register(){


  }

}
