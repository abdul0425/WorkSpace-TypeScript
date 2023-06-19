import { Component } from '@angular/core';
import { FamilyService } from '../service/family.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'viewfamily',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewFamilyComponent {
    constructor(private _service:FamilyService,
        private _activate:ActivatedRoute){}

    id!:number;
    family:any;

    ngOnInit(){
        this.id = this._activate.snapshot.params['id'];
        this._service.getFamilyById(this.id).subscribe((data)=>{
            this.family = data;
        })
    }
}
