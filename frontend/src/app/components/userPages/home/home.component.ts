import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../models/product";
import {Category} from "../../../models/category";
import {SharedContentService} from "../../../services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "../../../services/shared/user-Pages.Service/shared-footer";
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { ErrorService } from 'src/app/services/errorService';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/app/environments/environment';
import { TokenService } from 'src/app/services/TokenService';
import { AuthService } from 'src/app/services/AuthService';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  @ViewChild('sharedContent', {static: true}) sharedContent!: ElementRef;
  @ViewChild('sharedFooter', {static: true}) sharedFooter!: ElementRef;
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: any[] = [];
  selectedCategoryId: number | null = null;

  constructor(
    private sharedService: SharedProductCategoryService,
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    private errorService: ErrorService,
    private http: HttpClient,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (!this.authService.isAuthenticatedUser() || this.authService.getCurrentUserRole() !== 'User') {
      this.router.navigate(['/login']);
    }
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
    this.loadAllProducts();
    this.loadAllCategories();
  }

  async loadAllProducts(): Promise<void> {
    try {
      await this.sharedService.loadAllProducts();
      this.products = this.sharedService.getProducts();
      this.filteredProducts = [...this.products];
    } catch (error) {
      this.errorService.handleHttpError(error);
    }
  }

  async loadAllCategories() {
    try {
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();
    } catch (error) {
      this.errorService.handleHttpError(error);
    }
  }
  selectCategory(category: Category | undefined) {
    if (category && category.categoryId !== undefined) {
      console.log('Clicked Category:', category);
      this.selectedCategoryId = category.categoryId;
      console.log('Selected Category ID:', this.selectedCategoryId);
      this.loadProductsForSelectedCategory();
    }
  }


  loadProductsForSelectedCategory() {
    console.log('Selected Category ID:', this.selectedCategoryId);
    if (this.selectedCategoryId !== null) {
      this.filteredProducts = this.products.filter(product => product.categoryId === this.selectedCategoryId);
      console.log('Filtered Products:', this.filteredProducts);
    } else {
      this.filteredProducts = [...this.products]; // Reset to all products
      console.log('All Products:', this.filteredProducts);
    }
  }

  async logout(): Promise<any> {
    try {
      this.tokenService.clearToken();
      const response = await this.http.post<any>(environment.BASE_URL + '/logout', {}).toPromise();
      console.log('Logout successful', response);
      return response;
    } catch (error) {
      console.error('Error during logout', error);
      throw error;
    }
  }





addToCart(product:any){

}



}
