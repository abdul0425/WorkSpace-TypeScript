import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ProductService } from './services/product.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
