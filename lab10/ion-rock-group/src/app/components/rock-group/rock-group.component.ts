import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DataGetterService, RockGroup} from '../../service/data-getter.service';

@Component({
  selector: 'app-rock-group',
  templateUrl: './rock-group.component.html',
  styleUrls: ['./rock-group.component.scss'],
})
export class RockGroupComponent implements OnInit {

	@Input() rockGroup: RockGroup;
	@Input() isNew: boolean;
	@Output() addGroup = new EventEmitter();
	@Output() cancelAddingGroup = new EventEmitter();
	title: string;

  	constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
  	if(this.isNew){
  		this.rockGroup = {
        id: null,
  			number: '',
  			specialty: '',
  			studentsQuantity: null,
  			faculty:''
  		};
  		this.title = 'New group';
  	}
  }

addNew(){
	if(this.isNew){
		this.addGroup.emit(this.rockGroup);
	}
}

cancelAdding(){
	if(this.isNew){
		this.cancelAddingGroup.emit();
	}
}
  saveGroup(){
    this.dataGetter.editGroup(this.rockGroup).subscribe(
      data => console.log(data)
      );
  }
}
