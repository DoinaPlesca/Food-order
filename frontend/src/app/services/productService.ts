
import {State} from "./state";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Product} from "../models/product";
import {BehaviorSubject, firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";
import { Injectable } from "@angular/core";
import { ErrorService } from "./errorService";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private state: State,
    private http: HttpClient,
    private errorService: ErrorService,
    private toastr: ToastrService
  ) {
  }


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

  async deleteProductById(productId: number): Promise<void> {
    try {
      await this.http.delete<ResponseDto<Product>>(
        `${environment.BASE_URL}/food/order/${productId}`
      ).toPromise();
      const updatedProducts = this.state.getProducts().filter(product => product.productId !== productId);
      this.state.setProducts(updatedProducts);

      console.log(`Item with id ${productId} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete item with id ${productId}.`, error);
      throw error;
    }
  }

  async saveProduct(productData: any): Promise<Product | null> {
    try {
      const observable = this.http.post<ResponseDto<Product>>(
        environment.BASE_URL + '/food/order/new/product',
        productData
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

  async getProductById(productId: number): Promise<Product> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product>>(
          `${environment.BASE_URL}/food/order/${productId}`
        )
      );

      const product: Product = res.responseData;

      this.state.currentProduct = product;

      return product;

    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.errorService.handleHttpError(error);
      } else {
        console.error('An unexpected error occurred while fetching product', error);
      }
      throw error;
    }
  }


  async updateProductById(id: number, data: any) : Promise<void> {
  try {
    const res: any = await firstValueFrom(
      this.http.put<ResponseDto<Product>>(environment.BASE_URL + '/food/order/update/' + id, data)
    );

    this.state.currentProduct = res.responseData;
    this.toastr.show('Success update', 'Success');
     await this.getAllProducts();

  } catch (error) {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleHttpError(error);
    } else {
      this.toastr.show('Error', 'Error');
    }
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

}
