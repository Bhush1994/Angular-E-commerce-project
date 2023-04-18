import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageErrorComponent } from './components/page-error/page-error.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { SellerUpdateProductComponent } from './components/seller-update-product/seller-update-product.component';
import { UserComponent } from './components/user/user.component';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    SellerHomeComponent,
    PageErrorComponent,
    CategoriesComponent,
    SellerAddProductComponent,
    CartComponent,
    FooterComponent,
    CheckoutComponent,
    MyOrdersComponent,
    ProductDetailsComponent,
    SearchComponent,
    SellerUpdateProductComponent,
    UserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
