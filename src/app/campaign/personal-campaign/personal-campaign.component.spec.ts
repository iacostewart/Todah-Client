// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { PersonalCampaignComponent } from './personal-campaign.component';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



// @Component({
//   selector: 'app-start-campaign-form1',
//   templateUrl: './start-campaign-form1.component.html',
//   styleUrls: ['./start-campaign-form1.component.css']
// })
// export class StartCampaignForm1Component implements OnInit {
//   campaignForm: FormGroup;
//   campaignImageFile: File = null;
//   defaultDropdownDirection = 'select';
//   @ViewChild('MainImage') User_Image;



//   constructor(private campaignService: PersonalCampaignComponent, private form: FormBuilder) {
//     this.createForm();
//   }

//   ngOnInit() {

//   }

//   createForm() {
//     this.personalForm = this.form.group({
//       'campaignData': new FormGroup({
//         "creator_id": new FormControl(2),
//         "organization_title": new FormControl("Personal"),
//         "recipient_name": new FormControl("a rose by any other name smells as sweet"),
//         "project_category_id": new FormControl(1),
//         "campaign_short_description": new FormControl("This is a campaign to raise money to kiick off Adams flower shop.  To bring color and sweet smells to every house"),
//         "campaign_long_description": new FormControl("This is a campaign to raise money to kiick off Adams flower shop.  To bring color and sweet smells to every house"),
//         "campaign_image": new FormControl(null),
//         "campaigns_image": new FormControl(null),
//         "facebook_url": new FormControl("facebook.com"),
//         "instagram_url": new FormControl("twitter.com"),
//         "twitter_url": new FormControl("insta.com"),
//         "youtube_url": new FormControl("youtube.com"),
//       }),
//     })
//   }

//   onSubmit() {
//     // console.log(this.campaignForm);
//     this.personalService.store(this.campaignForm)
//       .subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
//       );
//   }

  

// }
