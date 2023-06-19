import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  update!: any;
  id!: number;

  constructor(
    private _service: CustomerService,
    private _route: Router,
    private _activate: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.id = this._activate.snapshot.params['id'];
    this._service.findById(this.id).subscribe((data)=>{
        this.update = data;
    })
  }

  submitForm(data:any) {
    console.log(data)
    this._service.updateCustomer(this.id, data.value).subscribe(
      (res) => {console.log(res)},
      (error) => console.error
    );
    this._route.navigate(['details']);
  }
}
