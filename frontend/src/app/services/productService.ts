
import {State} from "./state";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Product} from "../models/product";
import {BehaviorSubject, firstValueFrom} from "rxjs";
import {ResponseDto} from "../models/responsiveHelper/responseDto";
import {environment} from "../environments/environment";
import { Injectable } from "@angular/core";
import { ErrorService } from "./errorService";
import { ToastrService } from "ngx-toastr";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private state: State,
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}


  async getAllProducts(): Promise<Product[]> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product[]>>(`${environment.BASE_URL}/api/restaurant/products`)
      );
      this.state.setProducts(res.responseData);
      return res.responseData;
    } catch (error) {
      this.errorService.handleHttpError(error)
      throw error
    }
  }

  async deleteProductById(productId: number): Promise<void> {
    try {
      await this.http.delete<ResponseDto<Product>>(
        `${environment.BASE_URL}/api/restaurant/${productId}`
      ).toPromise();

      const updatedProducts = this.state.getProducts().filter(product => product.productId !== productId);
      this.state.setProducts(updatedProducts);
      this.errorService.showSuccessMessage(`Item deleted successfully.`);

    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }


  async saveProduct(productData: any): Promise<Product | null> {
    try {
      const observable = this.http.post<ResponseDto<Product>>(
        environment.BASE_URL + '/api/restaurant/new/product',
        productData
      );
      const response = await firstValueFrom(observable);
      return response?.responseData || null;

    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }


  async getProductById(productId: number): Promise<Product> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product>>(
          `${environment.BASE_URL}/api/restaurant/productId/${productId}`)
      );
      const product: Product = res.responseData;
      this.state.currentProduct = product;
      return product;

    } catch (error) {
      this.errorService.handleHttpError(error);
      throw error;
    }
  }


  async updateProductById(id: number, data: any) : Promise<void> {
    try {
      const res: any = await firstValueFrom(
        this.http.put<ResponseDto<Product>>(environment.BASE_URL + '/api/restaurant/product' + id, data)
      );
      this.state.currentProduct = res.responseData;

      this.errorService.showSuccessMessage('Success update');
      await this.getAllProducts();

    } catch (error) {
      this.errorService.handleHttpError(error);
    }
  }

 async getAllProductsForSelectedCategory(categoryId: number): Promise<Product[]> {
    try {
      const res: any = await firstValueFrom(
        this.http.get<ResponseDto<Product[]>>(`${environment.BASE_URL}/api/restaurant/${categoryId}/product`)
      );

      this.state.setProducts(res.responseData);

      return res.responseData;
    } catch (error) {
      this.errorService.handleHttpError(error)
      throw error;
    }
  }

}
