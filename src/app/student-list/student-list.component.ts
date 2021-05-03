import { Component, Input, OnInit } from '@angular/core';
import * as studentData from '../student-mockData/student.json';
export interface PeriodicElement {
  firstName: string;
  position: number;
  lastName: string;
  mobNo: number;
  dob: number;
  city: string;
  state: string;

}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'mobNo','delete'];
  dataSource = studentData['default'];
  isDelete:boolean;
  showStudent:boolean;
  constructor() { }

  ngOnInit(): void {
    this.isDelete=true;
    this.showStudent=true;
  }
  delete(index: any) {
    this.isDelete=false;
      setTimeout(element=>{
      this.isDelete=true;
    },2000)
    this.dataSource.splice(index,1)
    alert("Deleted Succeessfully");
   
  }
  addData(data:any){
    this.dataSource.push(data);
  }
}
