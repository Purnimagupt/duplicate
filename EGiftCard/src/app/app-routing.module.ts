import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';

import { BrandsComponent } from './component/brands/brands.component';
import { ContactComponent } from './component/contact/contact.component';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PurchaseCardsComponent } from './component/purchase-cards/purchase-cards.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'about',component:AboutComponent},

  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},

  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'brands',component:BrandsComponent},
  {path:'brands/purchase-cards',component:PurchaseCardsComponent},
  {path:'brands/purchase-cards/payment/:giftCardAmount',component:PaymentComponent},
  {path:'brands/purchase-cards/payment/home',component:HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
