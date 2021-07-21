import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';

import {MatInputModule} from '@angular/material/input';
import { Ng5SliderModule } from 'ng5-slider';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SuccessComponent } from './success/success.component';
import {MatChipsModule} from '@angular/material/chips';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmRegistrationComponent,
    HomeComponent,
    SuccessComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatChipsModule
  ],
  exports:[MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
