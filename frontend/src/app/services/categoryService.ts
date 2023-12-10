import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {State} from "./state";
import {Category} from "../models/category";
import {firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";
import { ErrorService } from "./errorService";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];

  constructor(
    private state: State,
    private http: HttpClient,
    private  errorService: ErrorService

  ) {}

  async getAllCategories(): Promise<Category[]> {
    try {
      const res: any = await firstValueFrom(
          this.http.get<ResponseDto<Category[]>>(`${environment.BASE_URL}/food/order/category`)
      );

      this.state.setCategories(res.responseData);
      return res.responseData;
    } catch (error) {
      console.error('Failed to fetch categories. Please try again later.');
      throw error;
    }
  }


  async deleteCategoryById(categoryId: number): Promise<void> {
    try {
      await this.http.delete<ResponseDto<Category>>(
        `${environment.BASE_URL}/food/order/category${categoryId}`
      ).toPromise();


      const updatedCategories = this.state.getCategories().filter(category => category.categoryId !== categoryId);
      this.state.setCategories(updatedCategories);

      console.log(`Category with id ${categoryId} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete category with id ${categoryId}.`, error);
      throw error;
    }
  }

  async saveCategory(categoryData: any): Promise<Category | null> {
    try {
      const observable = this.http.post<ResponseDto<Category>>(
        environment.BASE_URL + '/food/order/category',
        categoryData
      );

      const response = await firstValueFrom(observable);

      return response?.responseData || null;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {

        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while saving category', error);
      }
      return null;
    }
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Category[]>>(
          `${environment.BASE_URL}/api${categoryId}`
        )
      );

      this.state.currentCategory= res.responseData;
      return res.responseData;

    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while fetching category', error);
      }
      throw error;
    }
  }








}
