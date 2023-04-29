import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './navBar/navBar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

// Get Component Names From Each Components (Component.ts) File
// If You Leave The Path As ' ' It Home Page
const routes: Routes = [
  { path: 'Nav', component: NavBarComponent }, // Use Quick Save To Import Component
  { path: '', component: HomePageComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Products-detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
