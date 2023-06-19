import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  canActivate(): boolean {
    return confirm('Do you want to enter Parent One Component ?');
  }

  canDeactivate(): boolean {
    return confirm('Do you want to exit Parent Two Component ?');
  }

  canActivateChild(): boolean {
    return confirm('Do you want to enter Child Three Component ?');
  }
}
