import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerService } from '../customer.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path:"",component:CustomerComponent}])
  ],
  providers:[CustomerService],
  exports:[CustomerComponent]
})
export class CustomerModule { }
