import { Component, EventEmitter,Input,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  groups =[
    {
  	  number: `BMTH`,
  	  faculty:`rock`,
  	  specialty:`metal`,
      studentsQuantity:5
    },
    {
  	   number: `Wildways`,
  	   faculty:`rock`,
  	   specialty:`deathcore`,
       studentsQuantity:4
    },
  ];

  addGroup(group){
    this.groups.push(group);
  }
  
}
