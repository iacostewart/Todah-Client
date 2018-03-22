import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CampaignService } from '../../../campaign.service';
import { Router } from '@angular/router'
import { Campaign } from '../../start-campaign/model/Campaign';

interface CampId{
  campId: number;
}

@Component({
  selector: 'app-start-campaign-form1',
  templateUrl: './start-campaign-form1.component.html',
  styleUrls: ['./start-campaign-form1.component.css']
})
export class StartCampaignForm1Component implements OnInit {
  campaignForm: FormGroup;
  campaignImageFile: File = null;
  defaultDropdownDirection = 'select';
  @ViewChild('MainImage') User_Image;
  fileToUpload: File = null;



  constructor(private campaignService: CampaignService, private form: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.campaignForm = this.form.group({
      
        // 'project_img_thumb_url': new FormControl(null),
        // 'creator_id': new FormControl(null),
        // 'organization_name': new FormControl(null, Validators.required),
        // 'organization_ein': new FormControl (null),
        // 'campaignTitle': new FormControl(null, Validators.required),
        // 'chapterName': new FormControl(null),
        // 'staffName': new FormControl(null),

        // 'campaignCreatorRole': new FormControl(null, Validators.required),
        // 'campaignCategory': new FormControl(null, Validators.required),
        // 'campaignTeaser': new FormControl(null, Validators.required),
        // 'campaignLongDesc': new FormControl(null, Validators.required),
        // 'orgWebsite': new FormControl(null),

        // 'facebook': new FormControl(null),
        // 'twitter': new FormControl(null),
        // 'instagram': new FormControl(null),
        // 'youtube': new FormControl(null),
        "project_image_thumb_url": new FormControl("a rose"),
        "creator_id": new FormControl(2),
        "organization_name": new FormControl(""),
        "organization_ein": new FormControl("a rose by any other name smells as sweet"),
        "project_title": new FormControl(""),
        "project_purpose": new FormControl(""),
        "project_website": new FormControl(null),
        "project_image": new FormControl(null),
        "finished_step_one": new FormControl(true),
        "slider_inputs": new FormControl(""),
        "slider_ranges": new FormControl(""),
        "goal_currency": new FormControl("usd"),
        "goal": new FormControl(50000),
        "finished_step_two": new FormControl(false),
        "end_date": new FormControl("05/30/2018"),
        "is_published": new FormControl(false),
        "funder_count": new FormControl(1),
        "funded_amount_currency": new FormControl("A Flower in every vase"),
        "funded_amount": new FormControl(1500.25),
        "project_video": new FormControl("a rose by any other name smells as sweet"),
        "project_short_description": new FormControl(""),
        "project_category_id": new FormControl(1),
        "is_approved": new FormControl(false),
        "initial_funds_currency": new FormControl("usd"),
        "initial_funds": new FormControl(1500.25),
        "organization_chapter_name": new FormControl(""),
        "organization_staff_name": new FormControl(""),
        "external_payment_portal": new FormControl("youtube.com"),
        "is_personal_cause": new FormControl(false),
        "project_beneficiary": new FormControl("Hello World"),
        "campaign_slug":new FormControl(""),
        "never_event": new FormControl(false),
        "project_role": new FormControl(null),
        "facebook_url": new FormControl(""),
        "instagram_url": new FormControl(""),
        "twitter_url": new FormControl(""),
        "youtube_url": new FormControl(""),
        "allow_cash_donations": new FormControl(false),
        "published_email_sent": new FormControl(true),
        "client_is_paying_platform_fees": new FormControl(true)
      }) 
  }


  handleFileInput(files: FileList) {
    console.log('file:', files);
    this.fileToUpload = files.item(0);
    this.campaignService.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
      }, error => {
        console.log(error);
      });
}

  onSubmit() {
    window.localStorage.campId = ""
     this.campaignService.storeCampaign(this.campaignForm.value)
  .subscribe((campId: CampId) => {
    this.router.navigate(["/startCampaign-form2"]),
    console.log('*******notyThingkie************',campId),
    // (campId) => {JSON.stringify(campId), console.log(campId.id)}
   window.localStorage.setItem('campId', JSON.stringify(campId.campId))
  
  },
  (error) => console.log(error)
  );
  }

  // this.campaignService.storeCampaign(this.campaignForm.value)
  // .subscribe((response: Campaign) => {
  //   console.log("******* THE RESPONSE *******", response);
  //   this.router.navigate(["/startCampaign-form2"]
  //       )},

  // (error) => console.log(error)
  // );

}
