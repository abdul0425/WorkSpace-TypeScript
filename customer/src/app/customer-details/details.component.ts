import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  customers! : any[];

  constructor(private _service:CustomerService,
    private _route:Router){}

  ngOnInit(){
    this._service.customerList().subscribe((data)=>{
      this.customers = data;
    },error=>console.error)
  }

  goToUpdateCustomer(id:number){
    this._route.navigate(['update',id])
  }

  goToViewCustomer(id:number){
    this._route.navigate(['view',id])
  }

  goToDeleteCustomer(id:number){

  }
}
