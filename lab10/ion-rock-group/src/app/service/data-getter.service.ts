import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
	baseUrl = 'http://localhost/api/';
	groups = [];
	students = [];
	users = [];

	constructor (private http: HttpClient){
	}

	private userName = '';
	private token = '';

	checkUser(user){
		return this.http.post<any>(this.baseUrl + '?action=login', user);
	}

	getUser(){
		return this.userName;
	}

	setUser(name: string){
		this.userName = name;
	}

	setToken(token: string){
		this.token = token;
	}

	getGroups(){
		return this.http.get<any>(this.baseUrl + '?action=get-groups&token=' + this.token);
	}


	getStudents(){}


}
