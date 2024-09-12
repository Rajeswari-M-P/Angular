


// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
 
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,FormsModule,CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'register';
//   submittedData: { name: string, password: string }[] = [];
 
//   name: string = '';
//   password: string = '';
 
//   onSubmit() {
//     if (this.name && this.password) {
//       this.submittedData.push({ name: this.name, password: this.password });
//       // Clear the form after submission
//       this.name = '';
//       this.password = '';
//     }
//   }
// }
 




// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// // import { AddProductComponent } from './add-product/add-product.component';
// // import { AddedProductsComponent } from './added-products/added-products.component';

// @Component({

//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, FormsModule,RouterOutlet],//AddProductComponent,AddedProductsComponent
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  
// })
// export class AppComponent {
  
// }


// import { Component } from '@angular/core';
// import { AddProductComponent } from './add-product/add-product.component';
// import { AddedProductsComponent } from './added-products/added-products.component';
// import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [  RouterModule,AddProductComponent,AddedProductsComponent,CommonModule],
//   standalone:true,
// })
// export class AppComponent {
//   // Product list managed in the parent component
//   products: { name: string, productColor: string, productQuantity: number }[] = [];

//   // Handle product addition from child component (AddProductComponent)
//   onProductAdded(product: { name: string, productColor: string, productQuantity: number }) {
//     this.products.push(product);
//   }

//   // Handle product deletion from child component (AddedProductsComponent)
//   onProductDeleted(index: number) {
//     if (index >= 0 && index < this.products.length) {
//       this.products.splice(index, 1);
//     }}
// }



import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import {AddProductComponent} from './add-product/add-product.component'
//import {AddedProductsComponent} from './added-products/added-products.component'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, } from '@angular/common/http';




@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule,AddProductComponent,FormsModule,RouterModule, ],
  // providers: [ HttpClientModule(),provideHttpClient()]
})
export class AppComponent {
  productToEdit: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  product:any[] = [];

  
  
  showDetails = false;
  constructor(private http: HttpClient) { }
 
  onProductAdded(product: any) {
    if (this.productToEdit) {
      // Update existing product
      const index = this.product.findIndex(p => p.name === this.productToEdit.name);
      if (index !== -1) {
        this.product[index] = product;
      }
      this.productToEdit = null;
    } else {
      // Add new product
      this.product.push(product);
    }
    this.showDetails = true;
  }

  onProductDeleted(index: number) {
      if (index >= 0 && index < this.product.length) {
       this.product.splice(index, 1);
     }}


     onEditProduct(product: any) {
           this.productToEdit = product; // Set the product to be edited
           this.showDetails = false; // Show the form for editing
       }

     add(){
      this.showDetails=false;
     }
}
                 
////import { Component } from '@angular/core';
// import { ProductFormComponent } from './product-form/product-form.component';
// import { ProductDisplayComponent } from './productdisplay/productdisplay.component';
// import { CommonModule } from '@angular/common';
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   standalone: true,
//   imports: [ProductFormComponent, ProductDisplayComponent,CommonModule],
// })
// export class AppComponent {
//   productToEdit: any;
//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }
//   products: any[] = []; // Array to store all products
//   showDetails = false;
 
//   onProductAdded(product: any) {
//     if (this.productToEdit) {
//       // Update existing product
//       const index = this.products.findIndex(p => p.name === this.productToEdit.name);
//       if (index !== -1) {
//         this.products[index] = product;
//       }
//       this.productToEdit = null;
//     } else {
//       // Add new product
//       this.products.push(product);
//     }
//     this.showDetails = true;
//   }
 
//   onAddProduct() {
//     this.showDetails = false; // Go back to the form
//     this.productToEdit = null; // Clear product being edited
//   }
 
//   onEditProduct(product: any) {
//     this.productToEdit = product; // Set the product to be edited
//     this.showDetails = false; // Show the form for editing
//   }
// }

