import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatSliderModule, MatCardModule} from '@angular/material';
// import {MatCardContent} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CampaignService } from '../../../campaign.service';
import { Router } from '@angular/router';
// import {Service} from './service ';
import 'hammerjs';


// tslint:disable-next-line:import-spacing




@Component({
  selector: 'app-start-campaign-form2',
  templateUrl: './start-campaign-form2.component.html',
  styleUrls: ['./start-campaign-form2.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,



  // perserveWhitespaces: boolean,


})




export class StartCampaignForm2Component implements OnInit  {
  campaignPg2: FormGroup;
  campaignImageFile: File = null;
  defaultDropdownDirection = 'select';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true;
  step: 18;
  thumbLabel = true;
  value = 4;
  vertical: false;


  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  // tslint:disable-next-line:max-line-length
  constructor(private campaignService: CampaignService, private form: FormBuilder, private router: Router, ) {
    this.createForm();
    // this.service = service;
    // @Inject(Service)service
   }


  ngOnInit() {
    // this.service.setRootViewContainerRef(this.viewContainerRef);
    // this.service.addDynamicComponent();
  }
  createForm() {
    this.campaignPg2 = this.form.group ({
      'campId': new FormControl (Number(window.localStorage.campId)),
      'goal': new FormControl(null, Validators.required),
      'slider_inputs': new FormControl(5),
      'slider_ranges': new FormControl(500),
      'goal_currency': new FormControl('USD'),
      'initial_funded_currency': new FormControl('USD'),
      'initial_funded': new FormControl(null, Validators.required),
      'end_date': new FormControl(null, Validators.required)
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
onClick() {


}

onSubmit() {
  this.campaignService.updateCampaign(this.campaignPg2.value)
    .subscribe(
      () => {
      this.router.navigate(["/startCampaign-confirmation"])
    },
    (error) => {alert("2Campaign did not post please make sure all required fields are filled out")
    console.log(error)}
    );
}


// }
// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'button-overview-example',
//   templateUrl: 'button-overview-example.html',
//   styleUrls: ['button-overview-example.css'],
// })
// // tslint:disable-next-line:component-class-suffix
// export class ButtonOverviewExample { }
// tslint:disable-next-line:member-ordering
}

