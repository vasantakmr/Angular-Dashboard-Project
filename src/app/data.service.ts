import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getProduct(productId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + productId);
  }

  getOrders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
