import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../models/product";
import {Category} from "../../../models/category";
import {SharedContentService} from "../../../services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "../../../services/shared/user-Pages.Service/shared-footer";
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import { ErrorService } from 'src/app/services/errorService';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @ViewChild('sharedContent', {static: true}) sharedContent!: ElementRef;
  @ViewChild('sharedFooter', {static: true}) sharedFooter!: ElementRef;
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: any[] = [];
  selectedCategoryId: number | null = null;


  constructor(
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    private sharedService: SharedProductCategoryService,
    private errorService: ErrorService
  ) {
  }

  ngOnInit(): void {
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

  async loadAllCategories(): Promise<void> {
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

  addToCart(){

  }
}




