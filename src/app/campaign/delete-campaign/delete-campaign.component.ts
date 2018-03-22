import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../startCampaign/start-campaign/model/Campaign';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

let campIds = Number(window.localStorage.campId)+1

interface CampId{
  campId: number;
}

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

  
  onSubmit(){
    console.log("delete?", campIds);
    this.campaignService.deleteCampaign(campIds)
    .subscribe((campId: CampId) => {
      this.router.navigate(['/home'])
    //   console.log('*******campid Thingkie************',campId),
    //   // (campId) => {JSON.stringify(campId), console.log(campId.id)}
    // //  window.localStorage.setItem('campId', ""),
    // //  console.log("camp id after",window.localStorage.campId)
    //       (campId) => {this.router.navigate(['/'])}
    
    },
    (error) => console.log(error)
    )
    }
  }
  //   .subscribe(
  //   () =>{console.log("LOCAL STORAGE", window.localStorage.campId)},

  //     () => {this.router.navigate(['/'])}
  //   )}
  // }
  
