import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {State} from "./state";
import {Category} from "../models/category";
import {firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";
import { ErrorService } from "./errorService";
import {ToastrService} from "ngx-toastr";
import {extractRoutes} from "@angular-devkit/build-angular/src/utils/routes-extractor/extractor";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];

  constructor(
    private state: State,
    private http: HttpClient,
    private  errorService: ErrorService,
  ) {}

  async getAllCategories(): Promise<Category[]> {
    try {
      const res: any = await firstValueFrom(
          this.http.get<ResponseDto<Category[]>>(`${environment.BASE_URL}/api/restaurant/category`)
      );

      this.state.setCategories(res.responseData);
      return res.responseData;
    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }


  async deleteCategoryById(categoryId: number): Promise<void> {
    try {
      await this.http.delete<ResponseDto<Category>>(
        `${environment.BASE_URL}/api/restaurant${categoryId}`
      ).toPromise();


      const updatedCategories = this.state.getCategories().filter(category => category.categoryId !== categoryId);
      this.state.setCategories(updatedCategories);
      console.log(`Category  deleted successfully.`);
    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }

  async saveCategory(categoryData: any): Promise<Category | null> {
    try {
      const observable = this.http.post<ResponseDto<Category>>(
        environment.BASE_URL + '/api/restaurant/category',
        categoryData
      );
      const response = await firstValueFrom(observable);

      this.errorService.showSuccessMessage('Category saved successfully');
      return response?.responseData || null;
    } catch (error) {
      this.errorService.handleHttpError(error);
      return null;
    }
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Category>>(
          `${environment.BASE_URL}/api/restaurant${categoryId}`
        )
      );
      const  category : Category = res.responseData;

      this.state.currentCategory = category;

      this.errorService.showSuccessMessage('Category fetched successfully');

      return category;

    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }
  async updateCategoryById(categoryId: number, data: any) : Promise<void> {
    try {
      const res: any = await firstValueFrom(
        this.http.put<ResponseDto<Category>>(
          environment.BASE_URL + '/api/restaurant' + categoryId, data)
      );

      this.state.currentCategory = res.responseData;
      this.errorService.showSuccessMessage('Category updated successfully');


      await this.getAllCategories();

    } catch (error) {
      this.errorService.handleHttpError(error);
    }
  }


}
