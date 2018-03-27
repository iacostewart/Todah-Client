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
interface Tokens2 {
  message: String;
  token: string;
  data: {
    uid: String
  }
}

const api_Url = 'http://localhost:3000/api/users';

@Injectable()

export class RegistrationService {
  userInfo: Token;
  isLoggedIn = <boolean>(false);


  constructor( private http: HttpClient) { }

  // registration API call
  storeUsers(users: Users) {
    return this.http.post(`${api_Url}/signup`, users)
    .subscribe((token2: Tokens2) =>{
      console.log(token2)
      window.localStorage.setItem("userId", JSON.stringify(token2.data.uid) );
      window.localStorage.setItem('token', token2.token);
      this.isLoggedIn =true;
      window.localStorage.setItem('isloggedin', JSON.stringify(this.isLoggedIn))
    }

    )
  }

  login(loginInfo) {

    console.log('loginInfo', loginInfo);
    const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${api_Url}/Token`, loginInfo, )
    .subscribe( (token: Tokens) => {
      window.localStorage.setItem("userId", JSON.stringify(token.user.uid) );
      window.localStorage.setItem('token', token.token);
      this.isLoggedIn =true;
      window.localStorage.setItem('isloggedin', JSON.stringify(this.isLoggedIn)),
      (error) => {alert("Login failed please make sure your user name and password are correct.")
      console.log(error)}
    
    });
  }
  auth(){
    if (window.localStorage.isloggedin === "true"){
      return true
    }else{
      return false
    }
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
