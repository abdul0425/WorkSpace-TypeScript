import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FamilyService {
  constructor(private _http: HttpClient) {}

  public saveFamilyDetails(family: FormGroup): Observable<any> {
    return this._http.post('http://localhost:3000/family', family);
  }

  getFamilyList(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/family');
  }

  getFamilyById(id: number): Observable<any> {
    return this._http.get<any>(`http://localhost:3000/family/${id}`);
  }

  updateFamilyDetails(id: number, family: any): Observable<any> {
    return this._http.put(`http://localhost:3000/family/${id}`, family);
  }

  deleteMember(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/family/${id}`);
  }
}
