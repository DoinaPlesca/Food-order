import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../models/product";
import { Category } from "../models/category";
import { ProductService } from "./productService";
import { CategoryService } from "./categoryService";


@Injectable({
  providedIn: 'root',
})
export class SharedProductCategoryService {
  private products: Product[] = [];
  private categories: Category[] = [];

  private selectedCategoryId: number | null = null;
  private selectedCategoryIdSubject = new Subject<number | null>();
  selectedCategoryId$ = this.selectedCategoryIdSubject.asObservable();

  constructor(private productService: ProductService,
              private categoryService: CategoryService,


  ) {}

  async loadAllProducts(): Promise<void> {
    try {
      this.products = await this.productService.getAllProducts();
    } catch (error) {
      console.error('Failed to load products:', error);
      throw  error;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  async loadAllCategories(): Promise<void> {
    try {
      this.categories = await this.categoryService.getAllCategories();
    } catch (error) {
      console.error('Failed to load categories:', error);
      throw error;
    }
  }

  getCategories(): Category[] {
    return this.categories || [];
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedCategoryIdSubject.next(categoryId);
  }

  async getAllProductsForSelectedCategory(categoryId: number): Promise<Product[]> {
    try {
      if (this.selectedCategoryId === null) {
        throw new Error('No category selected.');
      }

      const res: any = await this.productService.getAllProductsForSelectedCategory(this.selectedCategoryId);

      this.products = res.responseData;
      return this.products;
    } catch (error) {
      console.error('Failed to fetch products for the selected category. Please try again later.');
      throw error;
    }
  }

  async deleteCategory(categoryId: number): Promise<void> {
    await this.categoryService.deleteCategoryById(categoryId);
  }

   async deleteProduct(id: number): Promise<void> {
    await this.productService.deleteProductById(id);
  }
  isProduct(item: Category | Product): item is Product {
    const product = item as Product;
    return product?.name !== undefined && product?.description !== undefined &&
      product?.price !== undefined && product?.quantity !== undefined;
  }

  isCategory(item: Category | Product): item is Category {
    const category = item as Category;
    return category.categoryName !== undefined && category?.categoryImageUrl !== undefined;
  }
  getProductSpecificProperty(product: Product): string {
    return `${product.name} - ${product.description}
    - ${product.price}- ${product.quantity}`;
  }

  getCategorySpecificProperty(category: Category): string {
    return `${category.categoryName} - ${category.categoryImageUrl}`;
  }
  isImageUrl(url: string): boolean {
    return url.endsWith('.jpg') || url.endsWith('.png');
  }

  async createProduct(newProduct: Product): Promise<Product> {
    try {
      return await this.productService.createProduct(newProduct);
    } catch (error) {
      console.error('Failed to create product in shared service.', error);
      throw error;
    }
  }






}
