import { Component, EventEmitter,OnInit, Input, Output} from '@angular/core';

import {GroupsDataService} from 'src/app/services/groups-data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})

export class GroupComponent implements OnInit {
  @Input() group;
  @Input() grpIndex;
  showInfo = false;
  
  constructor(private groupService:GroupsDataService){}

  ngOnInit(){
  }

  delGroup(){
  	this.groupService.deleteGroup(this.grpIndex);
  }
}

