import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPosComponent } from './components/billing-pos/billing-pos.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateWebsiteComponent } from './components/create-website/create-website.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { IndexHomeComponent } from './components/index-home/index-home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoDesignComponent } from './components/logo-design/logo-design.component';
import { OnlineGroceryComponent } from './components/online-grocery/online-grocery.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path : '', component: IndexHomeComponent},
  {path: 'home', component: IndexHomeComponent},
  {path: 'create-website', component: CreateWebsiteComponent},
  {path: 'online-store', component: EcommerceComponent},
  {path: 'logo-design', component: LogoDesignComponent},
  {path: 'pos-billing', component: BillingPosComponent},
  {path: 'online-grocery', component: OnlineGroceryComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'create-account', component: SignupComponent},
  {path: 'forget-password', component: ForgetpasswordComponent},
  {path: 'cart', component: CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [IndexHomeComponent, CreateWebsiteComponent, EcommerceComponent, LogoDesignComponent, BillingPosComponent, OnlineGroceryComponent, LoginComponent, SignupComponent, ForgetpasswordComponent, CartComponent]
