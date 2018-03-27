import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogRef } from "@angular/material";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldControl } from "@angular/material/typings/form-field/form-field-control";
import { MAT_DIALOG_DATA } from "@angular/material/typings/dialog/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RegistrationService } from "../auth.service";

@Component({
  selector: "app-login-pop",
  templateUrl: "./login-pop.component.html",
  styleUrls: ["./login-pop.component.css"]
})
export class LoginPopComponent implements OnInit {
  logForm: FormGroup;

  constructor(
    private registrationService: RegistrationService,
    public dialogRef: MatDialogRef<LoginPopComponent>,
    private form: FormBuilder
  ) {
    this.createForm();
  }
  ngOnInit() {}
  createForm() {
    this.logForm = this.form.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onCloseConfirm() {
    this.dialogRef.close();
  }

  onSubmit() {
    // console.log(this.campaignForm);
    console.log("this is logForm", this.logForm);
    this.registrationService.login(this.logForm.value);
  }
}
