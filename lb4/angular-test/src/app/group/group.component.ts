import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group;
  showInfo = false;
  
  constructor(){}

  ngOnInit(){
  }

  isOld(){
    return(+this.group.number.toString()[0]) > 2;
  }
}

