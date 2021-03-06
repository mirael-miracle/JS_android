import { Component, OnInit } from '@angular/core';
import {DataGetterService} from '../service/data-getter.service';
import {ActivatedRoute,Router} from '@angular/router';
import {SharedDataService} from '../service/shared-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
grpid:number;
grpnumb: string;
students: any[];

textData: string;

  constructor(private dataGetter: DataGetterService,
  			  private route: ActivatedRoute,
          private router: Router,
          private sharedData: SharedDataService) {
          this.grpid = +this.route.snapshot.paramMap.get('id'); 
        }

  ngOnInit() {
  	this.grpnumb = this.route.snapshot.paramMap.get('grpnumb');
  	this.dataGetter.getStudents(this.grpid).subscribe(
  		data =>{
  			this.students = data;
  		}
  	);
  }
  passData(){
    this.sharedData.setTextData(this.textData);
  }
}
