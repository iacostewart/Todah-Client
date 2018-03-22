import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campaign } from './startCampaign/start-campaign/model/Campaign';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable';


const api_url = 'http://localhost:3000/api';


@Injectable()
export class CampaignService {
    constructor(private http: HttpClient, private ar: ActivatedRoute) {}
    
    storeCampaign(campaign: Campaign) {
        return this.http.post(`${api_url}/campaigns`, campaign, { headers : this.getHeaders()});
    }

    private getHeaders(){
        return new HttpHeaders().set('Authorization', window.localStorage.token);
      }
    
    getCampaign(id: string){
        return this.http.get(`${api_url}/campaigns/${id}`,{ headers : this.getHeaders()})
    }

    deleteCampaign(id: number) {
        console.log("delete my campaign")
        return this.http.delete(`${api_url}/campaigns/${id}`,{ headers : this.getHeaders()});
    }

    // postFile(campaignImageFile: File): Observable<boolean> {
    //     return this.http.post
    // }
}
