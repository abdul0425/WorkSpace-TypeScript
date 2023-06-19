import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { UpdateFamilyComponent } from './update-family/update-family.component';
import { AppComponent } from './app.component';
import { ViewFamilyComponent } from './view-family/view.component';

const routes: Routes = [
  {
    path:'list',
    component:FamilyDetailsComponent
  },
  {
    path:'add',
    component:AddFamilyComponent
  },
  {
    path:'update/:id',
    component:UpdateFamilyComponent
  },
  {
    path:'',
    redirectTo:'AppComponent',
    pathMatch:'full'
  },
  {
    path:'view/:id',
    component:ViewFamilyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
