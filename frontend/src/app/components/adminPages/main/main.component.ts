import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/categoryService';
import { ProductService } from 'src/app/services/productService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateNewProductComponent } from '../create-new-product/create-new-product.component';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',})

export class MainComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  displayType: 'products' | 'categories' = 'categories';
  productId: string | undefined;

  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cdRef: ChangeDetectorRef,
    private dialog:MatDialog,
    private router :Router,


  ) {}


  ngOnInit(): void {
    this.loadData();

  }

  async loadData() {
    try {
      if (this.displayType === 'categories') {
        await this.sharedService.loadAllCategories();
        this.categories = this.sharedService.getCategories();

      } else if (this.displayType === 'products') {
        await this.sharedService.loadAllProducts();
        this.products = this.sharedService.getProducts();
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  }

  getData(): (Category | Product)[] {
    return this.displayType === 'categories' ? this.categories : this.products;
  }

  getTableHeaders(): string[] {
    if (this.displayType === 'categories') {
      return ['Category Name', 'Image'];
    } else if (this.displayType === 'products') {
      return ['Product Name', 'Description', 'Price', 'Quantity'];
    }
    return [];
  }

  getTableProperties(item: Category | Product): (string | number)[] {
    if (this.sharedService.isProduct(item)) {
      const product = item as Product;
      return Object.values(product);
    } else if (this.sharedService.isCategory(item)) {
      const category = item as Category;
      return Object.values(category);
    }
    return [];
  }

  switchDisplay(type: 'products' | 'categories') {
    this.displayType = type;
    this.loadData();
  }

  onDeleteItemClick(item: Category | Product): void {
    const itemId = this.sharedService.isProduct(item) ? item.productId : item.categoryId;

    if (itemId !== undefined) {
      if (this.sharedService.isProduct(item)) {
        this.productService.deleteProductById(itemId)
          .then(() => {
            this.products = this.products.filter(product => product.productId !== itemId);
            console.log(`Product with id ${itemId} deleted successfully.`);
          })
          .catch(error => {
            console.error(`Failed to delete product with id ${itemId}.`, error);
          });
      } else {

        this.categoryService.deleteCategoryById(itemId)
          .then(() => {
            this.categories = this.categories.filter(category => category.categoryId !== itemId);
            console.log(`Category with id ${itemId} deleted successfully.`);
          })
          .catch(error => {
            console.error(`Failed to delete category with id ${itemId}.`, error);
          });
      }
    } else {
      console.error('Item ID is undefined. Cannot delete item.');
    }
  }
  onEditItemClick(item: Category | Product): void {
    const itemId = this.sharedService.isProduct(item) ? item.productId : item.categoryId;

    if (itemId !== undefined) {
      const editQueryParam = { edit: 'true', itemId: itemId };
      const route = this.displayType === 'products' ? '/create-new-product.html' : '/create-category.html';

      this.sharedService.updateSelectedItem(item);
      this.router.navigate([route], { queryParams: editQueryParam });
    } else {
      console.error('Item ID is undefined. Cannot edit item.');
    }
  }


  openModal(): void {
    const dialogRef = this.dialog.open(CreateNewProductComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }

  openCategoryModal(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {});
    dialogRef.afterClosed().subscribe(result => {});



  }



}


