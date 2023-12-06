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

  private productsSubject = new BehaviorSubject<Product[]>([]);
  private categoriesSubject = new BehaviorSubject<Category[]>([]);

  products$ = this.productsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }

  /*getProducts(): Product[] {
    return this.productsSubject.value;
  }*/
  setCategories(categories: Category[]): void {
    this.categoriesSubject.next(categories);
  }

  /*getCategories(): Category [] {
    return this.categoriesSubject.value;
  }*/
  getProducts(): Product[] {
    return this.productsSubject.value || [];
  }

  getCategories(): Category[] {
    return this.categoriesSubject.value || [];
  }

}
