import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Users } from '../../campaign/startCampaign/start-campaign/model/User';
import { Token } from '../../campaign/startCampaign/start-campaign/model/Token';

interface Tokens {
  message: String;
  token: string;
  data: Object;
  user: {
    uid: String
  }
}

const api_Url = 'http://localhost:3000/api/users';

@Injectable()
export class RegistrationService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();


  constructor( private http: HttpClient) { }

  // registration API call
  storeUsers(users: Users) {
    return this.http.post(`${api_Url}/signup`, users);
  }

  login(loginInfo) {
    console.log('loginInfo', loginInfo);
    const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${api_Url}/Token`, loginInfo)
    .subscribe( (token: Tokens) => {

      console.log('*******notyThingkie************',token );
      
      window.localStorage.setItem("userId", JSON.stringify(token.user.uid) );

      window.localStorage.setItem('token', token.token);

      this.isLoggedIn.next(true);
      // this.router.navigate(['/notes'])
      console.log('******* token **** not lord of the rings...', window.localStorage.token);

      console.log('*******Local storage Uid************',window.localStorage.userId);
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
