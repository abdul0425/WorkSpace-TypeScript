import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent {
    constructor(private _activate : ActivatedRoute,
        private _service : EmployeeService){}
    employeeId!:number;
    employee!:any;

    ngOnInit(){
        this.employeeId = this._activate.snapshot.params['empId'];
        this._service.getById(this.employeeId).subscribe((data)=>{
            this.employee = data;
        })
    }
}
