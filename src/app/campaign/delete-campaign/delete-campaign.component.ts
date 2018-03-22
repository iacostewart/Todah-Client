import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../startCampaign/start-campaign/model/Campaign';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-delete-campaign',
  templateUrl: './delete-campaign.component.html',
  styleUrls: ['./delete-campaign.component.css']
})
export class DeleteCampaignComponent implements OnInit {

  deleteForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private ar: ActivatedRoute, private campaignService: CampaignService, private router: Router, private form: FormBuilder, ) {
  this.deleteCamp();
        }


  ngOnInit() {
  }

  deleteCamp() {
    this.deleteForm = this.form.group({
      'id': new FormControl
    });
  }


  onSubmit() {
    console.log('delete?', this.deleteForm);
    this.campaignService.deleteCampaign(20)
    .subscribe(
      (response) => this.router.navigate(['/']),
      // (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  }
