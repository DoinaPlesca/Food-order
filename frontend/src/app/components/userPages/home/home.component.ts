import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../models/product";
import {Category} from "../../../models/category";
import {SharedContentService} from "../../../services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "../../../services/shared/user-Pages.Service/shared-footer";
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  @ViewChild('sharedContent', { static: true }) sharedContent!: ElementRef;
  @ViewChild('sharedFooter', { static: true }) sharedFooter!: ElementRef;
  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private sharedProductService: SharedProductCategoryService,
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    ) {}

  async ngOnInit(){
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
    this.loadAllProducts();
    await this.loadAllCategories();
  }

  async loadAllProducts(): Promise<void> {
    try {
      await this.sharedProductService.loadAllProducts();
      this.products = this.sharedProductService.getProducts();
    } catch (error) {
      //this.toastr.error('Failed to load all products', 'Error');
    }
  }
  async loadAllCategories() {
    try {
      await this.sharedProductService.loadAllCategories();
      this.categories = this.sharedProductService.getCategories();
    } catch (error) {
      // this.error('Failed to load all categories','Error');
    }
  }
}


