import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comptwo.component';
import { CompOneComponent } from './comp-one/compone.component';

@NgModule({
  declarations: [AppComponent, CompTwoComponent, CompOneComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [CompOneComponent],
})
export class AppModule {}
