import { Component, EventEmitter,Input,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-test-proj';
  changeDate = new Date();
  groups =[
  {
  	number: `BMTH`,
  	faculty:`rock`,
  	specialty:`metal`
  },
  {
  	number: `Wildways`,
  	faculty:`rock`,
  	specialty:`deathcore`
  },
  ];
  onDataChange(event){
  	this.changeDate = event;
  }
  onChange(){
  	this.dataChange.emit(new Date());
  }
  @Input() group;
@Output() dataChange = new EventEmitter();
showInfo = false;
}
