import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products!: any[];
  result!: number;
  constructor(private _service: ProductService) {
    this.products = this._service.productList();
  }

  addition(num1: any, num2: any): void{
    this.result = this._service.add(parseInt(num1), parseInt(num2));
  }
}
