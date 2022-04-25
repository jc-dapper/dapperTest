import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from './Homeworks/Login/login.component';
import { CosumeApiComponent } from './Homeworks/cosume-api/cosume-api.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CosumeApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
