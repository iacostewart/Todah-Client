import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campaign } from './startCampaign/start-campaign/model/Campaign';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const api_url = 'http://localhost:3000/api';


@Injectable()
export class CampaignService {
    constructor(private http: HttpClient, private ar: ActivatedRoute, private router: Router) {}
    
    storeCampaign(campaign: Campaign) {
        return this.http.post(`${api_url}/campaigns`, campaign, { headers : this.getHeaders()})
        // .subscribe( (campId: CampId) => {
        //     console.log('*******notyThingkie************',campId );
        //     window.localStorage.setItem('campId', campId.id);
        //     console.log(window.localStorage)
        //   }); 
    }

    private getHeaders(){
        return new HttpHeaders().set('Authorization', window.localStorage.token);
      }
    
    getCampaign(id: string){
        return this.http.get(`${api_url}/campaigns/${id}`,{ headers : this.getHeaders()})
    }

    postFile(fileToUpload: File): Observable<object> {
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(`${api_url}/campaigns`, formData, {  headers : this.getHeaders() })
        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }

    deleteCampaign(id: number) {
        console.log("delete my campaign")
        // window.localStorage.setItem("campId", "")
        console.log("CAMP ID IN LOCAL", id)
        window.location.reload()
        this.router.navigate(['/home'])
    return this.http.delete(`${api_url}/campaigns/${id}`,{ headers : this.getHeaders()})
}}