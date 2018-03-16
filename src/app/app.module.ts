import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CampaignModule } from './campaign/campaign.module';
import { AppRoutingModule } from './shared/app-routing.module';
import { AdminModule } from './admin/admin.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { Component } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HowToSucceedComponent } from './components/how-to-succeed/how-to-succeed.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegistrationPopComponent } from './components/navbar/registration-pop/registration-pop.component';
import { LoginPopComponent } from './components/navbar/login-pop/login-pop.component';

import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from './campaign/campaign.service';
import { RegistrationService } from './components/navbar/auth.service';




// import { StartCampaignForm1Component } from './campaign/startCampaign/shared/start-campaign-form1/start-campaign-form1.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HowItWorksComponent,
    HowToSucceedComponent,
    FaqComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    RegistrationPopComponent,
    LoginPopComponent
  
  ],
entryComponents: [RegistrationPopComponent, LoginPopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CampaignModule,
    AdminModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,

    ScrollToModule.forRoot(),


    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule
    

  ],

  providers: [
    CampaignService, 
    RegistrationService
  ],

  bootstrap: [AppComponent ]
})
export class AppModule { }
export class PizzaPartyAppModule { }