import { NgModule,
  ViewEncapsulation,
  Component,
  Inject,
  ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from '../shared/campaign-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { FindCampaignSnapshotComponent } from './findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
import { FindCampaignComponent } from './findCampaign/find-campaign/find-campaign.component';
import { FindCampaignCategoryComponent } from './findCampaign/find-campaign-category/find-campaign-category.component';
import { GivingCampaignPageComponent } from './giving/giving-campaign-page/giving-campaign-page.component';
import { GivingEnvelopeWallComponent } from './giving/giving-envelope-wall/giving-envelope-wall.component';
import { GivingDonateComponent } from './giving/giving-donate/giving-donate.component';
import { CancelPaymentComponent } from './giving/cancel-payment/cancel-payment.component';
import { StartCampaignComponent } from './startCampaign/start-campaign/start-campaign.component';
import { StartCampaignSuccessComponent } from './startCampaign/shared/start-campaign-success/start-campaign-success.component';
import { StartCampaignForm1Component } from './startCampaign/shared/start-campaign-form1/start-campaign-form1.component';
import { StartCampaignForm2Component } from './startCampaign/shared/start-campaign-form2/start-campaign-form2.component';
import { StartCampaignConfirmComponent } from './startCampaign/shared/start-campaign-confirm/start-campaign-confirm.component';
import { DeleteCampaignComponent } from './delete-campaign/delete-campaign.component';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
// import { ImageUploadModule } from "angular2-image-upload";
import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from './campaign.service';
import { campaingID } from './globals';


@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ReactiveFormsModule,
    // ImageUploadModule.forRoot(),
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    // MatCardContent


  ],
  declarations: [
    ProfileComponent,
    FindCampaignSnapshotComponent,
    FindCampaignComponent,
    FindCampaignCategoryComponent,
    GivingCampaignPageComponent,
    GivingEnvelopeWallComponent,
    GivingDonateComponent,
    CancelPaymentComponent,
    StartCampaignComponent,
    StartCampaignSuccessComponent,
    StartCampaignForm1Component,
    StartCampaignForm2Component,
    StartCampaignConfirmComponent,
    DeleteCampaignComponent,
    // MatCardContent



  ],
  exports: [
    ProfileComponent,
    FindCampaignSnapshotComponent,
    FindCampaignComponent,
    FindCampaignCategoryComponent,
    GivingCampaignPageComponent,
    GivingEnvelopeWallComponent,
    GivingDonateComponent,
    CancelPaymentComponent,
    StartCampaignComponent,
    StartCampaignSuccessComponent,
    StartCampaignForm1Component,
    StartCampaignForm2Component,
    StartCampaignConfirmComponent,
    DeleteCampaignComponent,
    MatCardModule,
    // MatCardContent


  ],


  providers: [CampaignService,
    campaingID
  ]


})
export class CampaignModule { }
