
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./services/productService";
import {HomeComponent} from "./components/userPages/home/home.component";
import {MenuComponent} from "./components/userPages/menu/menu.component";
import {AboutComponent} from "./components/userPages/about/about.component";
import {ReservationComponent} from "./components/userPages/reservation/reservation.component";
import {MainComponent} from "./components/adminPages/main/main.component";
import {CategoryService} from "./services/categoryService";
import {SharedContentService} from "./services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "./services/shared/user-Pages.Service/shared-footer";
import {AppComponent} from "./app.component";
import {CommonModule } from '@angular/common';
import { SharedProductCategoryService } from './services/shared-prod_cat.service';
import { NgModule } from '@angular/core';
import {MatSortModule} from "@angular/material/sort";
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import {MatSelect, MatSelectModule} from "@angular/material/select";
import { CreateNewProductComponent } from './components/adminPages/create-new-product/create-new-product.component';
import { CreateCategoryComponent } from './components/adminPages/create-category/create-category.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ReservationComponent,
    MainComponent,
    CreateNewProductComponent,
    CreateCategoryComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatSortModule,
    MatDialogActions,
    MatDialogModule,
    ToastrModule.forRoot(),



  ],
  providers: [
    ProductService,
    CategoryService,
    SharedContentService,
    SharedFooterService,
    SharedProductCategoryService],

  bootstrap: [AppComponent],

})
export class AppModule { }
