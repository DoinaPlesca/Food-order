
import {State} from "./state";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private state: State,
    private http: HttpClient,
  ) {}


  async getAllProducts(): Promise<Product[]> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product[]>>(`${environment.BASE_URL}/food/order/product`)
      );
      this.state.setProducts(res.responseData);
      return res.responseData;
    } catch (error) {
      console.error('Failed to fetch products. Please try again later.');
      throw error;
    }
  }

  async getAllProductsForSelectedCategory(categoryId: number): Promise<Product[]> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product[]>>(`${environment.BASE_URL}/food/order/category/${categoryId}/product`)
      );

      this.state.setProducts(res.responseData);

      return res.responseData;
    } catch (error) {
      console.error('Failed to fetch products for the selected category. Please try again later.');
      throw error;
    }
  }


  async deleteProductById(productId: number): Promise<void> {
    try {
      await this.http.delete<ResponseDto<Product>>(
        `${environment.BASE_URL}/food/order/${productId}`
      ).toPromise();
      const updatedProducts = this.state.getProducts().filter(product => product.productId!== productId);
      this.state.setProducts(updatedProducts);

      console.log(`Item with id ${productId} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete item with id ${productId}.`, error);
      throw error;
    }
  }
  

}
