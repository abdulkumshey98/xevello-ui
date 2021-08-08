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
    RetailPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
