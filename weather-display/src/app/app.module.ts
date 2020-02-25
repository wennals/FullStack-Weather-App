import { BrowserModule } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import {SearchModule} from './search/search.module';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SearchModule,
    MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
