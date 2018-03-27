import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-campaign',
  templateUrl: './personal-campaign.component.html',
  styleUrls: ['./personal-campaign.component.css']
})
export class PersonalCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
