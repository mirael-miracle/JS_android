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
