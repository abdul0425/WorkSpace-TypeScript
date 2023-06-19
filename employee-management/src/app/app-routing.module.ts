import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddEmployeeComponent,
  },
  {
    path: 'list',
    component: EmployeeListComponent,
  },
  {
    path: '',
    redirectTo: 'AppComponent',
    pathMatch: 'full',
  },
  {
    path:'update/:empId',
    component:UpdateEmployeeComponent
  },
  {
    path:'employee/:empId',
    component:ViewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
