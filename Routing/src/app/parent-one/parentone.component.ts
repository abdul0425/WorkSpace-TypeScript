import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"app-parentone",
    templateUrl:"./parentone.component.html"
})
export class ParentoneComponent{
    
    var_one:any;
    
    constructor(private activatedRoute : ActivatedRoute){
        this.var_one = this.activatedRoute.snapshot.params['p_id']+"....."+this.activatedRoute.snapshot.params['p_name']+"...."+this.activatedRoute.snapshot.params['p_cost'];
    }
}