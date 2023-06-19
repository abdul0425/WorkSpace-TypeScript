import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() p_id: any;
  @Input() p_name: any;
  @Input() p_cost: any;


  @Output() send:EventEmitter<any> = new EventEmitter();

  sendData(){
    this.send.emit({p_id:this.p_id,p_name:this.p_name,p_cost:this.p_cost});
  }
}
