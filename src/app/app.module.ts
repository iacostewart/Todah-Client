import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewEncapsulation, ReflectiveInjector, ComponentFactoryResolver, } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CampaignModule } from './campaign/campaign.module';
import { AppRoutingModule } from './shared/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
// import {MaterialModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatCardContent} from '@angular/material';
import 'hammerjs';
// import { Service } from './service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,



} from '@angular/material';
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
import { RegistrationPopComponent } from './components/navbar/registration-pop/registration-pop.component';
import { LoginPopComponent } from './components/navbar/login-pop/login-pop.component';
import { CampaignService } from './campaign/campaign.service';
import { RegistrationService } from './components/navbar/auth.service';




// import { PersonalCampaignComponent } from './personal-campaign/personal-campaign.component';


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
    LoginPopComponent,
    // PersonalCampaignComponent

  ],
  exports: [
    CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  // MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatCardContent,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,

    // MatCardModule
  ],

  entryComponents: [
    RegistrationPopComponent,
    LoginPopComponent,

  ],

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
    MatSliderModule,
    ReactiveFormsModule,
    // MaterialModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    CampaignService,
    RegistrationService,

  ],

  bootstrap: [
    AppComponent
  ],

})


export class AppModule { }

export class PizzaPartyAppModule { }

