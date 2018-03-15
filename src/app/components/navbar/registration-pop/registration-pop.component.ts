import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-pop',
  templateUrl: './registration-pop.component.html',
  styleUrls: ['./registration-pop.component.css']
})
export class RegistrationPopComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<RegistrationPopComponent>) {
    
  }

  ngOnInit() {
  }

}