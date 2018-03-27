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
import { MatDialogContainer } from '@angular/material/typings/dialog/dialog-container';
import { RegistrationService } from './auth.service';
import { Router } from '@angular/router';
import { all } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],


})
export class NavbarComponent implements OnInit {
dialogRef: MatDialogRef<RegistrationPopComponent>;
dialogReflog: MatDialogRef<LoginPopComponent>;
// isLoggedIn = <boolean>(false);
public get isLoggedIn(): boolean {
  return this.authService.auth();
}
constructor(public dialog: MatDialog, private authService: RegistrationService, private router: Router) {
  // this.openDialog();
  // window.localStorage.setItem('isloggedin', JSON.stringify(this.isLoggedIn))


}
ngOnInit() {


}

openDialogReg() {
  this.dialogRef = this.dialog.open(RegistrationPopComponent, {
    height: '550px',
    width: '500px',
    panelClass: 'myapp-no-padding-dialog'



  });

}



openDialogLog() {
  this.dialogReflog = this.dialog.open(LoginPopComponent);
  this.dialogReflog.afterClosed().subscribe((result) => {
    console.log(result);
  });
}

public logout(){
  window.localStorage.clear()
  // console.log("*****Local storate after logout",window.localStorage)
  // window.localStorage.setItem("token", " ")
  // return window.localStorage.setItem("isloggedin", "false").subscribe(()=>{
  //   window.localStorage.setItem("isloggedin", "false"),
    this.router.navigate(["/home"])
  //   
  // })
  console.log("*****Local storate after logout",window.localStorage)
  return ()=> {
  window.localStorage.setItem("isloggedin", "false")
  }
}

}
