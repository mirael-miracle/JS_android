import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireDataGetterService {
	
	groups: Observable<any[]>;

	constructor(private readonly afs: AngularFirestore) {
		const groupsCollection = afs.collection('groups');
		this.groups = groupsCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return {id, data};
			}))
		);
	}
	getGroups(){
		return this.groups;
	}
}
