import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentoneComponent } from './parent-one/parentone.component';
import { ParenttwoComponent } from './parent-two/parenttwo.component';
import { ParentthreeComponent } from './parent-three/parentthree.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { ChildoneComponent } from './child-one/childone.component';
import { ChildtwoComponent } from './child-two/childtwo.component';
import { ChildthreeComponent } from './child-three/childthree.component';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentoneComponent,
    ParenttwoComponent,
    ParentthreeComponent,
    MasterComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'pageone/:p_id/:p_name/:p_cost',
        component: ParentoneComponent,
        children: [{ path: 'childone', component: ChildoneComponent }],
        canActivate:[AuthGuardService]
      },
      { path: 'pagetwo', component: ParenttwoComponent,children:[{
        path:'childtwo',component:ChildtwoComponent
      }],canDeactivate:[AuthGuardService] },
      { path: 'pagethree', component: ParentthreeComponent,children:[{
        path:'childthree',component:ChildthreeComponent
      }],canActivateChild:[AuthGuardService] },
    ]),
  ],
  providers: [],
  bootstrap: [MasterComponent],
})
export class AppModule {}
