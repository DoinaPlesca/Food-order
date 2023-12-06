import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {State} from "./state";
import {Category} from "../models/category";
import {firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];

  constructor(
    private state: State,
    private http: HttpClient,

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









}
