import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  private getUrl : string = 'http://localhost:8080/api'

  public addEmployee(employee: FormGroup): Observable<any> {
    return this._http.post('http://localhost:8080/api/add-employee', employee);
  }

  public findAllEmployee(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:8080/api/findAll');
  }

  public updateEmployee(employeeId: number, employee:any): Observable<any> {
    return this._http.put<any>(
      `http://localhost:8080/api/update/${employeeId}`,employee
    );
  }

  public getById(employeeId : number) : Observable<any>{
    return this._http.get<any>(`${this.getUrl}/${employeeId}`);
  }
}
