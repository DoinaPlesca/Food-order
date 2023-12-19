import { NgModule } from "@angular/core";
import {PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./components/userPages/home/home.component";
import {MenuComponent} from "./components/userPages/menu/menu.component";
import {AboutComponent} from "./components/userPages/about/about.component";
import {ReservationComponent} from "./components/userPages/reservation/reservation.component";
import { MainComponent } from "./components/adminPages/main/main.component";
import { CreateNewProductComponent } from "./components/adminPages/create-new-product/create-new-product.component";
import { CreateCategoryComponent } from "./components/adminPages/create-category/create-category.component";
import { EditProductComponent } from "./components/adminPages/edit-product/edit-product.component";
import { EditCategoryComponent } from "./components/adminPages/edit-category/edit-category.component";
import {LoginComponent} from "./components/loginPage/login/login.component";
import { RegisterComponent } from "./components/loginPage/register/register.component";
import { CartComponent } from "./components/userPages/cart/cart.component";



const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component : HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'reservation' , component: ReservationComponent},
  {path: 'main', component: MainComponent},
  {path: 'create-new-product', component: CreateNewProductComponent},
  {path: 'create-category' , component: CreateCategoryComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'cart', component: CartComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
