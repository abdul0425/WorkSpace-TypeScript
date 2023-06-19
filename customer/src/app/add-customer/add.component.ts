import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  reactiveForm!: any;

  constructor(private _service: CustomerService,
    private _route:Router) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
    });
  }

  submitForm() {
    console.log(this.reactiveForm.value);
    this._service.addCustomer(this.reactiveForm.value).subscribe(
      (data) => {},
      (error) => console.error
    );
    this._route.navigate(['view'])
  }
  
}
