import { FamilyService } from './../service/family.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css'],
})
export class AddFamilyComponent {
  family_signup!: FormGroup;

  constructor(private _service: FamilyService, private _route: Router) {}
  ngOnInit() {
    this.family_signup = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    this._service.saveFamilyDetails(this.family_signup.value).subscribe(
      (data) => {
        console.log(data);
        this._route.navigate(['list']);
      },
      (error) => console.error
    );
  }
}
