// create.component.ts

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      number: ['', Validators.required ]
   });
  }
  addShare(name, number) {
     const dataObj = {
      name: name,
      number: number
    };
    this.shareservice.addShare(dataObj);
  }
  ngOnInit() {
  }
}