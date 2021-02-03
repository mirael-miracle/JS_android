import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface RockGroup{
	number: string;
	faculty: string;
	specialty: string;
	studentsQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
	private groups: RockGroup[] = [
	{
		number: "BMTH",
		faculty: "rock",
		specialty:"metal",
		studentsQuantity: 5
	},
	{
		number:"Wildways",
		faculty:"rock",
		specialty:"deathcore",
		studentsQuantity: 6
	}
];


private students = [
	{name:'Oliver Sykes', groupNumb:"BMTH",
		gender:'man', rating:87},
	{name:'Jordan Fish', groupNumb:"BMTH",
		gender:'man', rating:80},
	{name:'Matt Nicols', groupNumb:"BMTH",
		gender:'man', rating:75},
	{name:'Anatoliy Borisov', groupNumb:"Wildways",
		gender:'man', rating:95},
	{name:'Novikov Wild', groupNumb:"Wildways",
		gender:'man', rating:90},
	{name:'Den Wild', groupNumb:"Wildways",
		gender:'man', rating:68},
];
 
constructor() { }
private userName = '';

private users = [
	'Max','Yana','Oliver'
];

getUser(){
	return this.userName;
}

setUser(name: string){
	this.userName = name;
}

userExist(name: string): boolean{
	return this.users.indexOf(name) !== -1;
}

getGroups(): Observable<RockGroup[]>{
	return of(this.groups);
	}

addGroup(group:RockGroup){
	this.groups.push(group);
	}

deleteGroup(index){
	this.groups.splice(index,1);
	}

getStudents(groupNumber: string): Observable<any[]>{
	return of(this.students.filter(elem => {
		return elem.groupNumb == groupNumber;
	}));
}
}
