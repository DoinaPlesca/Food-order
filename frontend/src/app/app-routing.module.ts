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
import { AuthGuard } from "./services/AuthGuard";


const routes: Routes = [
  {path: '',  component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { expectedRole: 'user' } },
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard], data: { expectedRole: 'user' }},
  {path: 'about' , component: AboutComponent, canActivate: [AuthGuard], data: { expectedRole: 'user' } },
  {path: 'reservation' , component: ReservationComponent, canActivate: [AuthGuard], data: { expectedRole: 'user' } },
  {path: 'main', component: MainComponent,  canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  {path: 'create-new-product', component: CreateNewProductComponent,  canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  {path: 'create-category' , component: CreateCategoryComponent , canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  {path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  {path: 'edit-category/:id', component: EditCategoryComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  {path: 'cart', component: CartComponent,canActivate: [AuthGuard], data: { expectedRole: 'user' } },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
