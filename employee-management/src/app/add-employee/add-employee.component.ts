import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['add-employee.component.css'],
})
export class AddEmployeeComponent {
  sign_up_form: FormGroup = new FormGroup({
    employeeName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });
  constructor(private _service: EmployeeService,
    private _route : Router) {}

  ngOnInit() {}
  saveEmployee() {
    this._service.addEmployee(this.sign_up_form.value).subscribe(
      (data) => {this._route.navigate(['list'])},
      (error) => console.log(error)
    );
  }
}
