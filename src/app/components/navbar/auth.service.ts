import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router'
import { Observable } from 'rxjs/observable'
import { Subject } from 'rxjs/Subject';
import { Users } from '../../campaign/startCampaign/start-campaign/model/User';
import { Token } from '../../campaign/startCampaign/start-campaign/model/Token';

const api_Url = 'http://localhost:3000/api/users';

@Injectable()
export class RegistrationService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();


  constructor( private http: HttpClient) { }

  //registration API call
  storeUsers(users: Users){
    return this.http.post(`${api_Url}/signup`, users)
  }

  login(loginInfo){
    console.log("loginInfo", loginInfo)
    const str=
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${api_Url}/Token`, loginInfo)
    .subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      // this.router.navigate(['/notes'])
    });
  }

  // currentUser(): Observable<Object>{
  //   if (!localStorage.getItem('id_token')){return new Observable(observer => observer.next(false)); }

  //   return this.http.get(`${api_Url}/api/Account/UserInfo`, {headers: this.setHeader()});
  // }

  // logout(): Observable<Object> {
  //   localStorage.clear();
  //   this.isLoggedIn.next(false);

  //   return this.http.post(`${api_Url}/api/Account/Logout`, {headers: this.setHeader()});
  //   // this._router.navigate(['/login']);
  // }

  // private setHeader(): HttpHeaders{
  //   return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  // }
}
