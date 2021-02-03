import { Component } from '@angular/core';
import {DataGetterService, RockGroup} from '../service/data-getter.service';
import {SharedDataService} from '../service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Rock Groups';
  userName: string;

	groups: RockGroup[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService,
    private sharedData: SharedDataService) {
  	this.dataGetter.getGroups().subscribe(
  			(data) =>{
  				this.groups = data;
  			}
  		);
    this.userName = this.dataGetter.getUser();
  }

add() {
  this.showNew = true;
}

delete(index: number) {
  this.dataGetter.deleteGroup(index);
}

addGroup(group) {
  this.dataGetter.addGroup(group);
  this.showNew = false;
}

ionViewDidEnter(){
  if(this.sharedData.getTextData()!='')
    this.title = this.sharedData.getTextData();
}
}
