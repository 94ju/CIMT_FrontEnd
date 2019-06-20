import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.editUserForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'jobtitle':new FormControl(null,Validators.required),
      'team':new FormControl(null,Validators.required),
      'cloudVendors':new FormArray([]),
    })
  }
  onSubmit(){
    console.log(this.editUserForm);
    this.editUserForm.reset();
  }
  onAddVendor(){
    const control= new FormControl(null,Validators.required);
    (<FormArray>this.editUserForm.get('cloudVendors')).push(control);
  }

}
