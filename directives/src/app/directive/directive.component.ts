import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  
  name: string = '';
  email: string = '';
  address: string = '';

  onSubmit(data: NgForm) {
    console.log(data);
  }
}
