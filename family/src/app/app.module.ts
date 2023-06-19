import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { UpdateFamilyComponent } from './update-family/update-family.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewFamilyComponent } from './view-family/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFamilyComponent,
    UpdateFamilyComponent,
    FamilyDetailsComponent,
    ViewFamilyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
