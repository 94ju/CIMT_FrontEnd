import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

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
      'username':new FormControl(null),
      'email':new FormControl(null),
      'jobtitle':new FormControl(null),
      'team':new FormControl(null),
    })
  }

}
