import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';
const LOCAL_API = 'http://localhost:4242/api';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private http: HttpClient) { }

  getAllProducts(limit= 4, sort= 'asc', category?: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${LOCAL_API}/products${
        category ? '?category=' + category + '&' : `?`
      }order=${sort}&quantity=${limit}`
      );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
      )
  }

  getAllProdcutsStripe(): Observable<Array<any>>{
    return this.http.get<Array<any>>(
      `${LOCAL_API}/all-products/`
      )
  }
}
