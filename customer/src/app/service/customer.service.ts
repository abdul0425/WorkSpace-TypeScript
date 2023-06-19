import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _http: HttpClient) {}

  public addCustomer(customer: any): Observable<any> {
    return this._http.post<any>('http://localhost:3000/customers', customer);
  }

  public customerList():Observable<any>{
    return this._http.get<any>('http://localhost:3000/customers');
  }

  public updateCustomer(id:number,customer:any) : Observable<any>{
    return this._http.put<any>(`http://localhost:3000/customers/${id}`,customer)
  }

  public findById(id:number) : Observable<any>{
    return this._http.get<any>(`http://localhost:3000/customers/${id}`);
  }
}
