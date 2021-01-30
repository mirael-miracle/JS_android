import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class GroupsDataService {
 private groups =[
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

  private students =[
    {name:'Oliver Sykes', groupNumb:"BMTH"},
    {name:'Lee Malia', groupNumb:"BMTH"},
    {name:'Jordan Fish', groupNumb:"BMTH"},
    {name:'Matt Niccols', groupNumb:"BMTH"},
    {name:'Matt Kean', groupNumb:"BMTH"},
    {name:'Anatoliy Borisov', groupNumb:"Wildways"},
    {name:'Novikov Wild', groupNumb:"Wildways"},
    {name:'Denny Wild', groupNumb:"Wildways"},
  ];

  constructor() { }

  getGroups() : Observable<any[]>{
  	return new Observable<any[]>(
        subscriber=>{
          subscriber.next(this.groups);
          subscriber.complete();
        }
      );
  }

  getStudents(groupNumber: string): Observable<any[]>{
    return new Observable<any[]>(
      subscriber => {
        subscriber.next(this.students.filter(elem=>{
      return elem.groupNumb === groupNumber;
    }));
        subscriber.complete();
      }
      );
  }

  addGroup(group){
  	this.groups.push(group);
  }

  deleteGroup(index){
  	this.groups.splice(index,1);
  }
}
