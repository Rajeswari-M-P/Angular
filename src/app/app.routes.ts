import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component'
import { AddedProductsComponent } from './added-products/added-products.component';
//import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'/add-product',pathMatch:"full"},
    // { path: 'home', component: HomeComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'added-products', component: AddedProductsComponent }
 ];



 //{path:"/add-product" component:AddProductComponent}
//path:"*",comp:nopagecomp
//path:"",comp: index page (if it is empty)