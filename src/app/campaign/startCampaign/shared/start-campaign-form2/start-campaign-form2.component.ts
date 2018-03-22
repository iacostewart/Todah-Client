import { NgModule } from '@angular/core';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatSliderModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import 'hammerjs';


// tslint:disable-next-line:import-spacing




@Component({
  selector: 'app-start-campaign-form2',
  templateUrl: './start-campaign-form2.component.html',
  styleUrls: ['./start-campaign-form2.component.css'],
  encapsulation: ViewEncapsulation.None
  // perserveWhitespaces: boolean,

})


export class StartCampaignForm2Component implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step: 18;
  thumbLabel = true;
  value: 18;
  vertical: false;




  constructor() { }


  ngOnInit() {
  }
  // get tickInterval(): number | 'auto' {
  //   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  // }
  // set tickInterval(v) {
  //   this._tickInterval = Number(v);
  // }
//   // // private _tickInterval = 1;
// }


}

