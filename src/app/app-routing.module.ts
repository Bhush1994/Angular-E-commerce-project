import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerUpdateProductComponent } from './components/seller-update-product/seller-update-product.component';
import { UserComponent } from './components/user/user.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerComponent,
    path: 'seller',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
  },{
    component:SellerAddProductComponent,
    path:'seller-add-product',
    
  },{
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
    
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailsComponent,
    path:'details/:productId'
  },{
    component:UserComponent,
    path:'user'
  },{
    component:CartComponent,
    path:'cart'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'my-orders'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
