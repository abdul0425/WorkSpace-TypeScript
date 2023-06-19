import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  result:any;

  constructor(private _service:CustomerService) { }

  ngOnInit(): void {
    this._service.getCustomers().subscribe((positiveResponse)=>{
      this.result=positiveResponse;
    }),((errorResponse:HttpErrorResponse)=>{
      if(errorResponse.error instanceof Error){
        console.log('Client Error !');
      }else{
        console.log('Server Error !');
      }
    })
  }

}
