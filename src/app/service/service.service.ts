import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getProduct()
  {
    return this.http.get("https://fakestoreapi.com/products")
  }
}
