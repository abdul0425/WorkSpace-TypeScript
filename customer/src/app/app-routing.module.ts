import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add-customer/add.component';
import { UpdateComponent } from './update-customer/update.component';
import { ViewComponent } from './view-customer/view.component';
import { DetailsComponent } from './customer-details/details.component';

const routes: Routes = [
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'update/:id',
    component:UpdateComponent
  },
  {
    path:'view/:id',
    component:ViewComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
