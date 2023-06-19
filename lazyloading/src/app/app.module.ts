import { AuthenticationService } from './authentication.service';
import { CanLoad, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'child',component:ChildComponent},{path:'lazy',loadChildren:()=>import('./customer/customer.module').then(obj=>obj.CustomerModule)}])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule{ 
  
}
