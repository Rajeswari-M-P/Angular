import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
})

export class AddProductComponent implements OnInit {
  name: string = '';
  productColor: string = '';
  productQuantity: number | null = null;
  productAdded: Array<{ name: string; productColor: string; productQuantity: number }> = [];
  ids: string[] = [];
  apiUrl = 'https://api.restful-api.dev/objects';
  productData: any[] = [];  // Store fetched products here
 

  constructor(private http: HttpClient, private router: Router) {}
  

  ngOnInit(): void {
    // No need to call postData on initialization, as there's no data to post yet
  }

  onSubmit(): void {// does not need to return any value
    const productData = {// Creates an object with the form data.
      name: this.name,
      data: {
        productColor: this.productColor,
        productQuantity: this.productQuantity
      }
    };

    // Log the data to be posted
    console.log('Posting data:', productData);

    // Post data to the API
    this.http.post<any>(this.apiUrl, productData).subscribe(response => {
    
      // Fetch the newly created product by ID
      this.fetchProductById(response.id);

      // Retrieve existing IDs from local storage
      const storedIds = localStorage.getItem('Id');
      const ids = storedIds ? JSON.parse(storedIds) : [];

      ids.push(response.id);

      localStorage.setItem('Id', JSON.stringify(ids));

      // Save the ID from the API response in local storage
      if (response && response.id) {
        localStorage.setItem('productId', response.id);
        console.log('Product ID saved to localStorage:', response.id);
      } else {
        console.error('No ID returned in response.');
      }

      // Add the product to the list
      this.productAdded.push({
        name: this.name,
        productColor: this.productColor,
        productQuantity: this.productQuantity!
      });

      // Clear the form
      this.name = '';
      this.productColor = '';
      this.productQuantity = null;
    });
  }

  fetchAllProducts(): void {//The method performs an action (fetching data) rather than returning a result.
    this.http.get<any[]>(this.apiUrl).subscribe(response => {
      console.log("Fetched products:", response);
      this.productData = response;
    });
  }

  fetchProductById(id: string): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(response => {//Observables are well-suited for handling asynchronous operations.
      // annotation specifies that the expected response will be an array of" any" type of objects.
      console.log("Fetched product by ID:", response);

      const existingIndex = this.productData.findIndex(product => product.id === id);
      if (existingIndex !== -1) {
        // Update the existing product if already in the list
        this.productData[existingIndex] = response;
      } else {
        // Add the newly fetched product to the list
        this.productData.push(response);
      }
    });
  }

  navigateToAddedProducts() {
    this.router.navigate(['/added-products']);
  }
}


// If the product exists (i.e., existingIndex is not -1), 
//this line updates the product at the found index with the new response data.

// If the product does not exist in the array (i.e., existingIndex is -1),
// this line adds the new response product to this.productData