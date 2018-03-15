import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const api_url = 'http://localhost:3000/api/';


@Injectable()
export class CampaignService {
    constructor(private http: HttpClient) {}
    storeCampaign(campaign: any) {
        return this.http.post(`${api_url}/campaigns`, campaign, { headers : this.getHeaders()});
    }

    private getHeaders(){
        return new HttpHeaders().set('Authorization', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZTkyMGIzYi05ZTkzLTQ3NWItOGZlMS1lNGUwY2FmMWM0YjMiLCJpYXQiOjE1MjEwNTgxNzA2MDV9.GO9T7BGlIMATumE6pGtmawLSTx0WhhvRkru8ZprlUKE");
      }
}