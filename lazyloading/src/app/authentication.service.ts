import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  canLoad():boolean{
    return confirm("Do you really want to load Lazily Loaded Module ?")
  }
}
