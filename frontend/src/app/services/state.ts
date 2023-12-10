import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Category} from "../models/category";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class State {

  products: Product[] = [];
  categories : Category[] = [];
  currentProduct: Product | null = null;
  currentCategory:Category | null = null;

  private productsSubject = new BehaviorSubject<Product[]>([]);
  private categoriesSubject = new BehaviorSubject<Category[]>([]);

  products$ = this.productsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }

 
  setCategories(categories: Category[]): void {
    this.categoriesSubject.next(categories);
  }

 
  getProducts(): Product[] {
    return this.productsSubject.value || [];
  }

  getCategories(): Category[] {
    return this.categoriesSubject.value || [];
  }

}
