import { Component } from '@angular/core';
import { FamilyService } from '../service/family.service';
import { Router } from '@angular/router';
@Component({
  selector: 'family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css'],
})
export class FamilyDetailsComponent {
  family_list!: any[];
  constructor(private _service: FamilyService,
    private _route:Router) {}
  ngOnInit() {
    this._service.getFamilyList().subscribe(
      (data) => {
        this.family_list = data;
      },
      (error) => console.error
    );
  }

  goToUpdateFamily(id:number){
    this._route.navigate(['update/',id])
  }

  goToViewFamily(id:number){
    this._route.navigate(['view',id])
  }

  deleteMember(id:number){
    this._service.deleteMember(id).subscribe((data)=>{
      console.log("Data Deleted !");
      
    });
    this._route.navigate(['list']);
  }
}
