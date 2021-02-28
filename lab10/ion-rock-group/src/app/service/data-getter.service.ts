import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface RockGroup{
	id : number;
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

	addGroup(group){
		return this.http.post<any>(
			this.baseUrl = '?action=add_group&token=' + this.token,
			group
			);
	}

	delGroup(group){
		return this.http.post<any>(
			this.baseUrl = '?action=del_group&token=' + this.token,
			group
			);
	}

	getStudents(id: number){
		return this.http.get<any>(
			this.baseUrl = `?action=get-students&group=${id}&token=${this.token}`
			);
	}

	editGroup(group){
		return this.http.post<any>(
			this.baseUrl = '?action=edit_group&token=' + this.token,
			group
			);
	}

}
