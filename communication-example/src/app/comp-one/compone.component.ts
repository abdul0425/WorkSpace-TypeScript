import { Component, QueryList, ViewChildren } from '@angular/core';
import { CompTwoComponent } from '../comp-two/comptwo.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './compone.component.html',
})
export class CompOneComponent {
  /* @ViewChild(CompTwoComponent)
  private obj!: CompTwoComponent;

  changeData() {
    this.obj.var_one = 'Modify_1';
    this.obj.var_two = 'Modify_2';
  }
  */
  array!: any[];

  @ViewChildren(CompTwoComponent)
  mapObj: QueryList<CompTwoComponent> = new QueryList();

  ngAfterViewInit() {
    this.array = this.mapObj.toArray();
  }

  modifyData() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].var_one = 'Modify_1';
      this.array[i].var_two = 'Modify_2';
    }
  }
}
