import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

import { AngularFirestore } from 'angularfire2/firestore';
import {DataSource} from '@angular/cdk/collections';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

    //@ViewChild(MatSort ) sort:MatSort;
  
  
    studentDetails = {
        studentName: '',
        studentAge: '',
        studentGrade: ''
      }
    
      displayedColumns = ['Name', 'Age', 'Grade'];
      dataSource = new StudentDataSource(this.student);
    
      constructor(private student: StudentService, private afs: AngularFirestore) {
    
      }
    
      addStudent() {
        this.student.addStudent(this.studentDetails);
      }
      ngOnInit() {
    }
    }
    
    export class StudentDataSource extends DataSource<any> {
    
      constructor(private student: StudentService) {
      super()
      }
    
      connect() {
        return this.student.getStudents();
      }
    
      disconnect() {
    
      }
    }