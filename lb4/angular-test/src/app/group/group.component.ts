import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  number = 'Wildways';
  faculty = 'Rock';
  specialty = 'metalcore';

  studentsQuantity = 4;
  students = [
  		'Vova Rockovich',
  		'Novikov Wild',
  		'Starostin Wild'

  ];
  starosta = 
  {
  	name:'Borisov Anatoliy',
  	age:24,
  	adress:'Minsk, Belarus'
  }
  images =[
  	'https://sites.google.com/site/bringmethehorizoonn/_/rsrc/1493066546342/istoria-sozdania-gruppy/14669555466030.jpg',
  	'https://img.geo.pro/geopro-photos/upload/iblock/f14/WILDWAYS.jpg',
  	'https://imgclf.112.ua/original/2020/02/12/416002.jpg?timestamp=1581514352'
  ];
  curImageIndex = 0;
  curImage: string;
  constructor() { }

  ngOnInit(): void{
  	this.curImage = this.images[this.curImageIndex];
  	setInterval(()=>{
  		this.curImageIndex++;
  		if(this.curImageIndex>=this.images.lenght){
  			this.curImageIndex = 0;
  		}
  		this.curImage = this.images[this.curImageIndex];
  	}, 2000);
  }

}
