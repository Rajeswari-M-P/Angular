// import { Component,OnInit,Input} from '@angular/core';

// @Component({
//   selector: 'app-added-products',
//   standalone: true,
//   imports: [],
//   templateUrl: './added-products.component.html',
//   styleUrl: './added-products.component.css'
// })
// export class AddedProductsComponent {
//   submittedData: { name: string, productColor: string, productQuantity: number }[] = [];
 
//   name: string = '';
//   productColor: string = '';
//   productQuantity: number | null = null;
 
//   onSubmit() {
//     if (this.name && this.productColor && this.productQuantity !== null) {
//       console.log("Submitted color:", this.productColor);
//       this.submittedData.push({
//         name: this.name,
//         productColor: this.productColor,
//         productQuantity: this.productQuantity
//       });
 
//       // Clear the form after submission
//       this.name = '';
//       this.productColor = '';
//       this.productQuantity = null;
//     }
//   }

//   editProduct(product: { name: string; productColor: string; productQuantity: number }) {
//     // Example implementation for editing a product
//     this.name = product.name;
//     this.productColor = product.productColor;
//     this.productQuantity = product.productQuantity;

//     // Find the index of the product to be edited
//     const index = this.submittedData.indexOf(product);
//     if (index > -1) {
//       this.submittedData.splice(index, 1); // Remove the product from the array
//     }
//   }

//   deleteProduct(product: { name: string; productColor: string; productQuantity: number }) {
//     // Example implementation for deleting a product
//     const index = this.submittedData.indexOf(product);
//     if (index > -1) {
//       this.submittedData.splice(index, 1); // Remove the product from the array
//     }
//   }
// }



// ---------------------------------
// import { Component,Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import EventEmitter from 'events';
// import { ProductService } from '../product.service';
 
// @Component({

//   selector: 'app-added-products',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './added-products.component.html',
//   styleUrls: ['./added-products.component.css']
  
// })
// export class AddedProductsComponent {
//  // title: 'Angular' = "Angular";
//  @Input() submittedData: any[] = [];
 
//  constructor(private productService: ProductService) {}

//   name: string = '';
//   productColor: string = '';
//   productQuantity: number | null = null;
 
//   onSubmit() {
//     if (this.name && this.productColor && this.productQuantity !== null) {
//       console.log("Submitted color:", this.productColor);
//       this.submittedData.push({
//         name: this.name,
//         productColor: this.productColor,
//         productQuantity: this.productQuantity
//       });
 
//       // Clear the form after submission
//       this.name = '';
//       this.productColor = '';
//       this.productQuantity = null;
//     }
//   }

 

//   editProduct(product: { name: string; productColor: string; productQuantity: number }) {
//     // Example implementation for editing a product
//     this.name = product.name;
//     this.productColor = product.productColor;
//     this.productQuantity = product.productQuantity;

//     // Find the index of the product to be edited
//     const index = this.submittedData.indexOf(product);
//     if (index > -1) {
//       this.submittedData.splice(index, 1); // Remove the product from the array
//     }
//   }

//   deleteProduct(product: { name: string; productColor: string; productQuantity: number }) {
//     // Example implementation for deleting a product
//     const index = this.submittedData.indexOf(product);
//     if (index > -1) {
//       this.submittedData.splice(index, 1); // Remove the product from the array
//     }
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-added-products',
//   templateUrl: './added-products.component.html',
//   styleUrls: ['./added-products.component.css'],
//   standalone: true,
//   imports: [CommonModule],
// })
// export class AddedProductsComponent implements OnInit {
//   products: { name: string; productColor: string; productQuantity: number }[] = [];
//   name: string | undefined;
//   productColor: string | undefined;
//   productQuantity: number | undefined;
//   submittedData: any;
  

//   constructor(private productService: ProductService) {}

//   ngOnInit() :void {
//     // Initialize products on component load
//     this.products = this.productService.getProducts();

//   }


//   editProduct(product: { name: string; productColor: string; productQuantity: number }) {
//         // Example implementation for editing a product
//         this.name = product.name;
//         this.productColor = product.productColor;
//         this.productQuantity = product.productQuantity;
    
//         // Find the index of the product to be edited
//         const index = this.submittedData.indexOf(product);
//         if (index > -1) {
//           this.submittedData.splice(index, 1); // Remove the product from the array
//         }
//       }
//   deleteProduct(index: number) {
//     this.productService.deleteProduct(index);
//   }
// }














// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-added-products',
//   templateUrl: './added-products.component.html',
//   styleUrls: ['./added-products.component.css'],
//   standalone: true,
//   imports: [CommonModule],
// })
// export class AddedProductsComponent {
//   //@Input() products: { name: string; productColor: string; productQuantity: number }[] = [];
//   @Input() product: any[] = [];
//   @Output() productEdited = new EventEmitter<{ name: string; productColor: string; productQuantity: number }>();

//   editingProduct: { name: string; productColor: string; productQuantity: number } | null = null;

//   // Accepts the full product object
//   editProduct(product: { name: string; productColor: string; productQuantity: number }) {
//     this.editingProduct = { ...product }; // Clone the product to avoid direct modification
//   }

//   onSubmitEdit() {
//     if (this.editingProduct) {
//       // Emit the updated product details
//       this.productEdited.emit(this.editingProduct);

//       // Clear the editing form after submission
//       this.editingProduct = null;
//     }
//   }

//   @Output() delete = new EventEmitter<number>();

//   deleteProduct(index: number) {
//     this.delete.emit(index);  // Emit the index of the product, not an event
//   }
// }


// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

// @Component({
//   selector: 'app-added-products',
//   templateUrl: './added-products.component.html',
//   styleUrls: ['./added-products.component.css'],
//   imports:[CommonModule,FormsModule],
//   standalone:true,
// })
// export class AddedProductsComponent {
//  @Input() productAdded: any[]=[]; // Receive product data from parent


//    @Output()  addProduct=new EventEmitter<void>();

//   // @Input() productAdded: { name: string; productColor: string; productQuantity: number }[] = [];
//    @Output() productUpdated = new EventEmitter<{ name: string; productColor: string; productQuantity: number }>();
 
//    selectedProduct: { name: string; productColor: string; productQuantity: number } | null = null;


  

//   editingProduct: { name: string; productColor: string; productQuantity: number } | null = null;
//   router: any;
//   product: any;

  



//    editProduct(productAdded: { name: string; productColor: string; productQuantity: number }):void {
//   this.editingProduct = { ...productAdded }; // Clone the product to avoid direct modification
//   }


 

 

//   // Method to update the product after editing
//   updateProduct(): void {
//     if (this.selectedProduct) {
//       const index = this.productAdded.findIndex(p => p.name === this.selectedProduct?.name);
//       if (index > -1) {
//         this.productAdded[index] = { ...this.selectedProduct };
//       }

//       // Emit the updated product event
//       this.productUpdated.emit(this.selectedProduct);
      
//       // Clear the selected product after update
//       this.selectedProduct = null;
//     }
//   }


//   deleteProduct(product: { name: string; productColor: string; productQuantity: number }): void {
//     const index = this.productAdded.indexOf(product);
//     if (index > -1) {
//       this.productAdded.splice(index, 1);
//     }
// }

// add(){
//   this.addProduct.emit();
  
// }}


// src/app/added-products/added-products.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-added-products',
//   templateUrl: './added-products.component.html',
//   styleUrls: ['./added-products.component.css'],
//   imports:[CommonModule,FormsModule],
//   standalone:true,
// })
// export class AddedProductsComponent implements OnInit {
//   productAdded: { name: string; productColor: string; productQuantity: number }[] = [];

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.productService.products$.subscribe(products => this.productAdded = products);
//   }

//   deleteProduct(product: { name: string; productColor: string; productQuantity: number }): void {
//     this.productService.deleteProduct(product);
//   }

//   editProduct(product: { name: string; productColor: string; productQuantity: number }): void {
//     //this.productService.editProduct(product);
//     // Implement edit logic if necessary
//     // You might want to open a dialog to edit the product or navigate to an edit form
//   }
// }



import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';





@Component({
  selector: 'app-add-product',
  templateUrl: './added-products.component.html',
  styleUrls: ['./added-products.component.css'],
  standalone:true,
  imports:[CommonModule,]
})
export class AddedProductsComponent implements OnInit{

  apiUrl = 'https://api.restful-api.dev/objects';
  data: any[] = []; //An array that will store the fetched product data.


 
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    this.fetchDataFromStoredIds();
  }
 
  fetchDataFromStoredIds() {
    if (typeof window !== 'undefined') {
      const storedIds = localStorage.getItem('Id');//Retrieves a string from local storage that contains IDs.
 

      if (storedIds) {
                try {
                  const ids = JSON.parse(storedIds);//Parses the string from local storage into an array of IDs.
                  if (Array.isArray(ids) && ids.length > 0) {//Checks if ids is an array and has elements
                    const queryParams = ids
                      .map((id) => `id=${encodeURIComponent(id)}`)// This maps over each id in the ids array and transforms it into a query parameter string.
                      .join('&');//Creates query parameters for the HTTP request, encoding each ID.
                    const url = `${this.apiUrl}?${queryParams}`;
         
                    this.http.get<any[]>(url).subscribe(
                      (response) => {
                        console.log('Data fetched from API:', response);
                        this.data = response;//Updates the data property with the fetched product data.
                       
                      },
                      (error) => {
                        console.error('Error fetching data from API:', error);
                      }
                    );
                  }
                } catch (e) {
                  console.error('Error parsing JSON from local storage', e);
                }
              } else {
                console.warn('No IDs found in local storage');
              }
            }
          }
        }



// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
 
// @Component({
//   selector: 'app-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './list.component.html',
//   styleUrl: './list.component.css',
// })
// export class ListComponent implements OnInit {
//   apiUrl = 'https://api.restful-api.dev/objects';
//   data: any[] = [];
 
//   constructor(private http: HttpClient) {}
 
//   ngOnInit(): void {
//     this.fetchDataFromStoredIds();
//   }
 
//   fetchDataFromStoredIds() {
//     if (typeof window !== 'undefined') {
//       const storedIds = localStorage.getItem('Id');
 
//       if (storedIds) {
//         try {
//           const ids = JSON.parse(storedIds);
//           if (Array.isArray(ids) && ids.length > 0) {
//             const queryParams = ids
//               .map((id) => `id=${encodeURIComponent(id)}`)
//               .join('&');
//             const url = `${this.apiUrl}?${queryParams}`;
 
//             this.http.get<any[]>(url).subscribe(
//               (response) => {
//                 console.log('Data fetched from API:', response);
//                 this.data = response;
//                 // Handle the response data as needed
//               },
//               (error) => {
//                 console.error('Error fetching data from API:', error);
//               }
//             );
//           }
//         } catch (e) {
//           console.error('Error parsing JSON from local storage', e);
//         }
//       } else {
//         console.warn('No IDs found in local storage');
//       }
//     }
//   }
// }