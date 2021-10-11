import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { IndexHomeComponent } from './components/index-home/index-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';
import { CreateWebsiteComponent } from './components/create-website/create-website.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { LogoDesignComponent } from './components/logo-design/logo-design.component';
import { BillingPosComponent } from './components/billing-pos/billing-pos.component';
import { OnlineGroceryComponent } from './components/online-grocery/online-grocery.component';
import { FoodDeliveryComponent } from './components/food-delivery/food-delivery.component';
import { RetailPosComponent } from './components/retail-pos/retail-pos.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CompleteComponent } from './components/complete/complete.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TermsComponent } from './components/terms/terms.component';
import { CareersComponent } from './components/careers/careers.component';
import { PartnersProgramComponent } from './components/partners-program/partners-program.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    IndexHomeComponent,
    FooterComponent,
    MobileNavComponent,
    FullLogoComponent,
    CreateWebsiteComponent,
    EcommerceComponent,
    LogoDesignComponent,
    BillingPosComponent,
    OnlineGroceryComponent,
    FoodDeliveryComponent,
    RetailPosComponent,
    SideNavComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    CartComponent,
    CheckoutComponent,
    CompleteComponent,
    AboutUsComponent,
    BlogsComponent,
    ContactUsComponent,
    FaqsComponent,
    TermsComponent,
    CareersComponent,
    PartnersProgramComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
