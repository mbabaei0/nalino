import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { BranchesComponent } from './branches/branches.component';
import { SubmitGranteeComponent } from './submit-grantee/submit-grantee.component';



const routes: Routes = [
    {path: '', component: HomeComponent,
        children: [
         { path: '', component:  MainComponent },
         {path: 'product', component: ProductComponent},
         {path: 'products', component: AllProductsComponent},
         {path: 'mainproducts', component: MainProductsComponent},
         {path: 'shop', component: ShopComponent},
         {path: 'profile', component: ProfileComponent},
         {path: 'branches', component: BranchesComponent},
         {path: 'warrantee', component: SubmitGranteeComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
