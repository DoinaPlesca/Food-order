import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Category} from "../models/category";
import {BehaviorSubject} from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class State {

  products: Product[] = [];
  categories : Category[] = [];
  currentProduct: Product | null = null;
  currentCategory:Category | null = null;
  users: User[]= [];
  currentUser: User = {};
  currentRole: string = '';


  private productsSubject = new BehaviorSubject<Product[]>([]);
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  private userSubject = new BehaviorSubject<User[]>([]);

  products$ = this.productsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();
  user$ = this.userSubject.asObservable();
  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }
  getProducts(): Product[] {
    return this.productsSubject.value || [];
  }

  setCategories(categories: Category[]): void {
    this.categoriesSubject.next(categories);
  }

  getCategories(): Category[] {
    return this.categoriesSubject.value || [];
  }

  setUsers(users: User[]): void {
    this.userSubject.next(users);
  }
  getUsers(): User[] {
    return this.userSubject.value || [];
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
  setCurrentUser(user: User):void {
    this.currentUser = user;
  }

  getCurrentRole(): string {
    return this.currentRole;
  }

  setCurrentRole(role: string): void {
    this.currentRole = role;
  }
}
