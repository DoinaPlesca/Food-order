import {Component, OnInit} from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { SharedProductCategoryService } from 'src/app/services/shared-prod_cat.service';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',

})
export class CreateNewProductComponent implements OnInit{
  categories: Category[] = [];

  constructor(private sharedService: SharedProductCategoryService) {}

  ngOnInit(): void {
    this.loadAllCategories();

    }

  async loadAllCategories(): Promise<void> {
    try {
      await this.sharedService.loadAllCategories();
      this.categories = this.sharedService.getCategories();
    } catch (error) {
      console.error('Failed to load all categories', error);
    }
  }
  async saveProduct(): Promise<void> {
    try {

      const name = (document.getElementById('productName') as HTMLInputElement).value;
      const description = (document.getElementById('description') as HTMLTextAreaElement).value;
      const image_url = (document.getElementById('imageUrl') as HTMLInputElement).value;
      const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
      const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value, 10);
      const categoryId = parseInt((document.getElementById('category') as HTMLSelectElement).value);

      const newProduct: Product = {
        name,
        description,
        price,
        quantity,
        image_url,
        categoryId
      };

      await this.sharedService.createProduct(newProduct);

      console.log('Product created successfully');
    } catch (error) {
      console.log('Fail');
    }
  }

  cancelCreation(){

  }
}
