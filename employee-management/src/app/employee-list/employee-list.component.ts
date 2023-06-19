import { Router } from '@angular/router';
import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  constructor(private _service: EmployeeService,
    private _route :Router) {}
  ngOnInit(): void {
    this.employeeDetails();
  }
  employee_list!: any[];
  employeeDetails() {
    this._service.findAllEmployee().subscribe((data) => {
      this.employee_list = data;
    });
  }

  goToUpdateEmployee(employeeId : number){
    this._route.navigate(['/update',employeeId]);
  }

  goToViewEmployee(employeeId:number){
    this._route.navigate(['employee',employeeId])
  }
}
