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
}
