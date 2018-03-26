import { NgModule } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CampaignService } from '../../../campaign.service';
import { Router } from '@angular/router';
import 'hammerjs';


// tslint:disable-next-line:import-spacing




@Component({
  selector: 'app-start-campaign-form2',
  templateUrl: './start-campaign-form2.component.html',
  styleUrls: ['./start-campaign-form2.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,


})




export class StartCampaignForm2Component  {
  campaignPg2: FormGroup;
  campaignImageFile: File = null;
  defaultDropdownDirection = 'select';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true ;
  step: 1;
  thumbLabel = true;
  showThumb  = true ;
  value: 0;
  vertical: false;




constructor(private campaignService: CampaignService, private form: FormBuilder, private router: Router) {
    this.createForm();
  }



  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }
  createForm() {
    this.campaignPg2 = this.form.group({
      'goal': new FormControl(50000),
      'slider_inputs': new FormControl(''),
      'slider_ranges': new FormControl(''),
      'goal_currency': new FormControl(''),
      'initial_funded_currency': new FormControl(''),
        'initial_funded': new FormControl(''),


    });
}
get tickInterval(): number | 'auto' {
  return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
}
set tickInterval(v) {
  this._tickInterval = Number(v);
}
// tslint:disable-next-line:member-ordering
private _tickInterval = 1;
}





// function newFunction() {
//   onsubmit(this: Window, ev:Event) => any;
//   {
//     // console.log(this.campaignForm);
//     this.campaignService.storeCampaign(this.campaignPg2.value)
//       .subscribe((response) => this.router.navigate(['/startCampaign-form3']),
//         // (response) => console.log(response),
//         (error) => console.log(error));
//   }


