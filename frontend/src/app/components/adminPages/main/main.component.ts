import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/categoryService';
import { ProductService } from 'src/app/services/productService';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import { CreateNewProductComponent } from '../create-new-product/create-new-product.component';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import {ActivatedRoute, Router } from '@angular/router';
import {animate, state, style, transition, trigger } from '@angular/animations';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { ErrorService } from 'src/app/services/errorService';
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  displayType: 'products' | 'categories' = 'categories';
  productId: string | undefined;

  constructor(
    private sharedService: SharedProductCategoryService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private dialog:MatDialog,
    private router :Router,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) {
  }




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
      this.errorService.handleHttpError(error);
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
    this.sharedService.updateSelectedItem(null);
    this.loadData();
  }


  onDeleteItemClick(item: Category | Product): void {
    const itemId = this.sharedService.isProduct(item) ? item.productId : item.categoryId;

    if (itemId !== undefined) {
      const deleteAction = this.sharedService.isProduct(item)
        ? () => this.productService.deleteProductById(itemId)
        : () => this.categoryService.deleteCategoryById(itemId);

      deleteAction()
        .then(() => {
          if (this.sharedService.isProduct(item)) {
            this.products = this.products.filter(product => product.productId !== itemId);

            this.errorService.showSuccessMessage('Product deleted successfully.');
          } else {
            this.categories = this.categories.filter(category => category.categoryId !== itemId);

            this.errorService.showSuccessMessage('Category deleted successfully.');
          }
        })
        .catch(error => {
          console.error(`Failed to delete this item.`, error);
          this.errorService.handleHttpError(error);
        });
    } else {
      console.error('Item ID is undefined. Cannot delete item.');
    }
  }

  onEditItemClick(item: Category | Product): void {
    const itemId = this.sharedService.isProduct(item) ? item.productId : item.categoryId;

    if (itemId !== undefined) {
      const editRoute = this.sharedService.isProduct(item) ? '/edit-product' : '/edit-category';

      this.router.navigate([editRoute, itemId])
        .then(() => {
          const itemType = this.sharedService.isProduct(item) ? 'Product' : 'Category';

          this.errorService.showSuccessMessage(`${itemType} is being edited.`);
        })
        .catch(error => {
          console.error(`Failed to navigate to edit page for this item.`, error);
          this.errorService.handleHttpError(error);
        });
    } else {
      console.error('Item ID is undefined. Cannot edit item.');
    }
  }


   openModal(): void {
    const dialogRef = this.dialog.open(CreateNewProductComponent, {});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openCategoryModal(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }

}


