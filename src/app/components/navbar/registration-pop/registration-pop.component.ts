import { Component, OnInit, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../auth.service';
import { Directive, Attribute  } from '@angular/core';
import { Validator,  NG_VALIDATORS } from '@angular/forms';

interface Response {
  message: String;
  token: string;
  data: Object;
}

@Component({
  selector: 'app-registration-pop',
  templateUrl: './registration-pop.component.html',
  styleUrls: ['./registration-pop.component.css']
})
export class RegistrationPopComponent implements OnInit {
  regForm: FormGroup;


  constructor(

    public dialogRef: MatDialogRef<RegistrationPopComponent>,
    private form: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.createForm();

  }
  ngOnInit() {
  }

  // password?:string;
  // is_superuser?: boolean;
  // username?:string;
  // firstname?:string;
  // lastname?:string;
  // email?:string;
  // is_staff?: boolean;
  // is_active?: boolean;
createForm() {
  this.regForm = this.form.group({
    'lastname': new FormControl( 'Tester' , Validators.required),
    'is_superuser': new FormControl( false, Validators.required),
    'is_staff': new FormControl(true, Validators.required),
    'is_active': new FormControl(true, Validators.required),
    'firstname': new FormControl('Test', Validators.required),
    'username': new FormControl('Test', Validators.required),
    'email': new FormControl('Test@test.com', Validators.required),
    'password': new FormControl('', Validators.required),
    'repassword': new FormControl('', Validators.required)


  });
  }
  



  onCloseConfirm() {
    this.dialogRef.close();
  }

  onSubmit() {
    // console.log(this.campaignForm);

    console.log('this is regForm', this.regForm);
    this.registrationService.storeUsers(this.regForm.value)
      .subscribe(
      (response: Response) => window.localStorage.setItem('token', response.token),
      (error) => console.log(error)
      );
     console.log('&&&&&& registration button***********', this.regForm);
     console.log('********* TOKEN *******', window.localStorage.token);
  }

}

