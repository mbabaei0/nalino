import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './main/main.component';
///import { ArticlesPageComponent } from '../articles/articles.component';
import { ProductsComponent } from '../components/products/products.component';
import { KitchenNewsComponent } from '../components/kitchen-news/kitchen-news.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { GallaryComponent } from '../components/gallary/gallary.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ServicesComponent } from '../components/services/services.component';
import { ItemComponent } from '../components/item/item.component';
import { FeaturedItemComponent } from '../components/featured-item/featured-item.component';
// import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { SliderComponent } from '../components/slider/slider.component';
import { BannerComponent } from '../components/banner/banner.component';
import { NavComponent } from '../components/nav/nav.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { LyExpansionIconModule } from '@alyle/ui';
import { LyExpansionModule } from '@alyle/ui/expansion';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyCheckboxModule } from '@alyle/ui/checkbox';


import { ProductComponent } from './product/product.component';
import { ImgSliderComponent } from './product/img-slider/img-slider.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { ColorsComponent } from '../components/colors/colors.component';
import { CommentsComponent } from './product/comments/comments.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RatingComponent } from '../components/rating/rating.component';
import { ModalComponent } from '../components/modal/modal.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { TransactionsComponent } from './profile/transactions/transactions.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { AdressComponent } from './profile/adress/adress.component';
import { BranchesComponent } from './branches/branches.component';
import { SubmitGranteeComponent } from './submit-grantee/submit-grantee.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [  MainComponent,HomeComponent,
    NavComponent,
    BannerComponent,
    SliderComponent,
    // TopNavComponent,
    FeaturedItemComponent,
    ItemComponent,
    ServicesComponent,
  //  FooterComponent,
    GallaryComponent,
    ArticlesComponent,
    KitchenNewsComponent,
    ProductsComponent,
    ProductComponent,
    CategoriesComponent,
    PartnersComponent,
    ColorsComponent,
    ImgSliderComponent,
    CommentsComponent,
    RatingComponent,
  //  ModalComponent,
    ProductDetailComponent,
    AllProductsComponent,
    MainProductsComponent,
    ShopComponent,
    ProfileComponent,
    InfoComponent,
    TransactionsComponent,
    OrdersComponent,
    AdressComponent,
    BranchesComponent,
    SubmitGranteeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
   FormsModule,
   NgSelectModule ,
   ReactiveFormsModule,
    SharedModule,
    LyExpansionModule,
    LyTypographyModule,
    LyExpansionIconModule,
    LyRadioModule,
    LyCheckboxModule,
    
  ],
  exports:[]
})
export class HomeModule { }
