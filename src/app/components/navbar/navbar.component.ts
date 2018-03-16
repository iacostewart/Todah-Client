import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { RegistrationPopComponent } from '../navbar/registration-pop/registration-pop.component';
import { LoginPopComponent } from '../navbar/login-pop/login-pop.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MatFormFieldControl } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/typings/dialog/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],


})
export class NavbarComponent implements OnInit{
dialogRef: MatDialogRef<RegistrationPopComponent>;
dialogReflog: MatDialogRef<LoginPopComponent>
constructor(public dialog: MatDialog) {
  // this.openDialog();
  
  let isLogedIn: '';

}
ngOnInit() {
 

}

openDialogReg() {
  this.dialogRef = this.dialog.open(RegistrationPopComponent);
  this.dialogRef.afterClosed().subscribe((result) => {
    console.log(result);
  })
}

openDialogLog() {
  this.dialogReflog = this.dialog.open(LoginPopComponent);
  this.dialogReflog.afterClosed().subscribe((result) => {
    console.log(result);
  })
}

}