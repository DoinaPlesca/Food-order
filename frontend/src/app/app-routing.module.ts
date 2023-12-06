import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./components/userPages/home/home.component";
import {MenuComponent} from "./components/userPages/menu/menu.component";
import {AboutComponent} from "./components/userPages/about/about.component";
import {ReservationComponent} from "./components/userPages/reservation/reservation.component";
import { MainComponent } from "./components/adminPages/main/main.component";
import { CreateNewProductComponent } from "./components/adminPages/create-new-product/create-new-product.component";


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'menu.html' , component: MenuComponent},
  {path: 'about.html' , component: AboutComponent},
  {path: 'reservation.html' , component: ReservationComponent},
  {path: 'main.html', component: MainComponent},
  {path: 'create-new-product.html', component: CreateNewProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
