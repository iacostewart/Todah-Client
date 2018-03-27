import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campaign } from './startCampaign/start-campaign/model/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { campaingID } from './globals';
import { CampaignUpdate } from './startCampaign/start-campaign/model/Campaign_Update';



const api_url = 'http://localhost:3000/api';


interface CampId {
    id: number;
  }

@Injectable()
export class CampaignService {




    constructor(private http: HttpClient, private ar: ActivatedRoute, private router: Router, public campaignID: campaingID) {}



    storeCampaign(campaign: Campaign) {
        return this.http.post(`${api_url}/campaigns`, campaign, { headers : this.getHeaders()});
        // .subscribe( (campId: CampId) => {
        //     console.log('*******notyThingkie************',campId );
        //     window.localStorage.setItem('campId', campId.id);
        //     console.log(window.localStorage)
        //   });
    }
    updateCampaign(campaignUpdate: CampaignUpdate) {
        console.log('update happening... campaignUpdate', campaignUpdate);
        return this.http.put(`${api_url}/campaigns/${campaignUpdate.campId}`, campaignUpdate, { headers : this.getHeaders()});
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', window.localStorage.token);
      }

    getCampaign(id: string) {
        return this.http.get(`${api_url}/campaigns/${id}`, { headers : this.getHeaders()});
    }


    postFile(campaignImageFile: File): Observable<object> {
        const formData: FormData = new FormData();
        formData.append('fileKey', campaignImageFile, campaignImageFile.name);
        return this.http.post(`${api_url}/campaigns`, formData, {  headers : this.getHeaders() });

        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }

    // postFile(fileToUpload: File): Observable<FormData> {
    //     console.log('here');
    //     console.log(fileToUpload, 'file from service')
    //     const endpoint = 'your-destination-url';
    //     const formData: FormData = new FormData();
    //     console.log(formData);
    //     formData.append('fileKey', fileToUpload, fileToUpload.name);
    //     console.log(formData);
    //     return new Observable<FormData>((observer) => {
    //         observer.next(formData);
    //     });

    deleteCampaign(id: number) {


        console.log('CAMP ID IN Global campaignID', this.campaignID.ID);
        console.log('delete my campaign');
        console.log('CAMP ID IN LOCAL', id);
        window.location.reload();
        this.router.navigate(['/home']);
        return this.http.delete(`${api_url}/campaigns/${id}`, { headers : this.getHeaders()});


    }


}



        // window.localStorage.setItem("campId", "")


