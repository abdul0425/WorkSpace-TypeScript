import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  constructor(
    private _service: EmployeeService,
    private _activat: ActivatedRoute,
    private _route: Router
  ) {}

  employeeId!: number;

  employee!: any;

  ngOnInit() {
    this.employeeId = this._activat.snapshot.params['empId'];
    this._service.getById(this.employeeId).subscribe((data) => {
      this.employee = data;
    });
  }
  updateEmployee(updateForm: any) {
    this._service
      .updateEmployee(this.employeeId, updateForm.value)
      .subscribe((data) => {});
    this.goToEmployeeList();
  }

  goToEmployeeList() {
    this._route.navigate(['list']);
  }
}
