import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-start-campaign-form1',
  templateUrl: './start-campaign-form1.component.html',
  styleUrls: ['./start-campaign-form1.component.css']
})
export class StartCampaignForm1Component implements OnInit {
  campaignForm: FormGroup;
  defaultDropdownDirection = 'select';
 

  constructor(private form: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
   
  }

  createForm() {
    this.campaignForm = this.form.group({
      'orgName': new FormControl(null, Validators.required),
      'chapterName': new FormControl(null),
      'staffName': new FormControl(null),
      'campaignTitle': new FormControl(null, Validators.required),
      'campaignCreatorRole': new FormControl(null, Validators.required),
      'campaignCategory': new FormControl( Validators.required),
      'campaignTeaser': new FormControl(null, Validators.required),
      'campaignLongDesc': new FormControl(null, Validators.required),
      'orgWebsite': new FormControl(null),
      'mainCampImg': new FormControl(null, Validators.required),
      'facebook': new FormControl(null),
      'twitter': new FormControl(null),
      'instagram': new FormControl(null),
      'youtube': new FormControl(null),
 })
  }

  onSubmit() {
    console.log(this.campaignForm);
  }

  
}
