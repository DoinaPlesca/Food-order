import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../models/product";
import {Category} from "../../../models/category";
import {SharedContentService} from "../../../services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "../../../services/shared/user-Pages.Service/shared-footer";
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @ViewChild('sharedContent', { static: true }) sharedContent!: ElementRef;
  @ViewChild('sharedFooter', { static: true }) sharedFooter!: ElementRef;


  products: Product[] = [];
  categories: Category[] = [];
 


  constructor(
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    private sharedService: SharedProductCategoryService,
  ) {}

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
    } catch (error) {
      //this.toastr.error('Failed to load all products');
    }
  }

  async  loadAllCategories(): Promise <void>{
    try{
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();

    } catch (error) {
     // this.toastr.error('Failed to load all categories' );
    }
  }
  async loadProductsForSelectedCategory(categoryId: number) {
    try {
      this.products =
        await this.sharedService.getAllProductsForSelectedCategory(categoryId);
    } catch (error) {
      //this.toastr.error('Error loading products for the selected category');
    }
  }

  selectCategory(category: Category | undefined) {
    if (category && category.categoryId !== undefined) {
      this.sharedService.selectCategory(category.categoryId);
    }
  }



}

