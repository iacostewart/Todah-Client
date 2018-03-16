import { Component, OnInit, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration-pop',
  templateUrl: './registration-pop.component.html',
  styleUrls: ['./registration-pop.component.css']
})
export class RegistrationPopComponent implements OnInit {
  regForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<RegistrationPopComponent>, private form: FormBuilder) {
    this.createForm();
  
  }
  ngOnInit() {
  }
createForm() {
  this.regForm = this.form.group({
    'lastname': new FormControl(null, Validators.required),
    'firstname': new FormControl(null, Validators.required),
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
    'repassword': new FormControl(null, Validators.required),
             

  })
  }
  onCloseConfirm() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.regForm);
    // modal: this.regForm
  }
 
}

