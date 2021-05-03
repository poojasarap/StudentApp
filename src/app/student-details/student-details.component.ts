import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 city=['Pune','Mumbai', 'Nagpur', 'Delhi', 'Amaravati'];
 state=['Maharashtra','Gujrat','Madha Pradesh']
 @Output() callFun:EventEmitter<any>= new EventEmitter();
 studGroup: FormGroup;
  post: any;  
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.studGroup = this.formBuilder.group({
      firstName: [''],
      lastName:[''],
      mobNo:[''],
      email:[''],
      gender:[''],
      dob:[''],
      address:[''],
      city:[''],
      state:['']
    });
   }
 
  ngOnInit(): void {  
  }
  onSubmit(post: any) { 
    this.callFun.emit(post);
    alert("Added Successfully");
    this.router.navigate(['/student-list']);
  }
}
