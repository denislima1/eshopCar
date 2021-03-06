import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

//import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HomePageRoutingModule
    RouterModule.forChild([{
      path: '',
      component: HomePage
    }]),
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    ProductListComponent,
    ShoppingCartComponent
  ]
})
export class HomePageModule { }
