import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name!: FormControl;
  address!: FormControl;
  username!: FormControl;
  email!: FormControl;
  password!: FormControl;
  contact!: FormControl;

  

  constructor() {}

  ngOnInit(): void {}

  submitForm(login_details: NgForm) {
    console.log(login_details.value);
  }
}
