import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-loged-in',
  templateUrl: './is-loged-in.component.html',
  styleUrls: ['./is-loged-in.component.css']
})
export class IsLogedInComponent implements OnInit {

    

    
  constructor() { }
  

  ngOnInit() {
    status = '';
    localStorage.id_token ==='' ? (status = 'LoginIn'):( status = 'Logout');
  }

}
