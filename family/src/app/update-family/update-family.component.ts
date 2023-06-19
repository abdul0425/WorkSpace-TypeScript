import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FamilyService } from '../service/family.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'update-family',
  templateUrl: './update-family.component.html',
  styleUrls: ['./update-family.component.css'],
})
export class UpdateFamilyComponent {
  constructor(
    private _service: FamilyService,
    private _activate: ActivatedRoute,
    private _route: Router
  ) {}

  id!: number;
  family!: any;

  ngOnInit() {
    this.id = this._activate.snapshot.params['id'];
    this._service.getFamilyById(this.id).subscribe((data) => {
      this.family = data;
    });
  }
  submitForm(myFamily: any) {
    this._service
      .updateFamilyDetails(this.id, myFamily.value)
      .subscribe((data) => {});
    this._route.navigate(['list']);
  }
}
