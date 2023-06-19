import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  getCustomers(){
    return this._http.get('https://fakestoreapi.com/users')
  }
}
