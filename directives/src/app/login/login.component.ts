import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  login_details: any = {
    user_name: '',
    password: '',
  };

  status!: string;

  login() {
    this.status =
      this.login_details.user_name === 'admin' &&
      this.login_details.password === 'admin$123'
        ? 'Login Success !'
        : 'Login Failed !';
  }

  user_details:any={
    f_name:'',
    m_name:'',
    l_name:'',
    gender:'',
    address:'',
    contact:''
  }

  
}
