
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reqform',
  templateUrl: './reqform.component.html',
  styleUrls: ['./reqform.component.scss']
})
export class ReqformComponent implements OnInit {

  public requestForm: FormGroup;

  constructor(private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.requestForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }

  /*
  This creates a new formgroup. You can think of it as adding an empty object
  into an array. So we are pushing an object to the formarray 'itemrows' that
  has the property 'itemname'. 
  */
  initItemRows() {
      return this._fb.group({
          itemname: [''],
          itemnam: [''],
          itemna: ['']
      });
  }

  
  addNewRow() {
      const control = <FormArray>this.requestForm.controls['itemRows'];
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      const control = <FormArray>this.requestForm.controls['itemRows'];
      control.removeAt(index);
  }
}