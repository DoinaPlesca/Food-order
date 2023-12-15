import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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



const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'register.html', component : RegisterComponent},
  {path: 'home.html', component : HomeComponent},
  {path: 'menu.html' , component: MenuComponent},
  {path: 'about.html' , component: AboutComponent},
  {path: 'reservation.html' , component: ReservationComponent},
  {path: 'main.html', component: MainComponent},
  {path: 'create-new-product.html', component: CreateNewProductComponent},
  {path: 'create-category.html' , component: CreateCategoryComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
