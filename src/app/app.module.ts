import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from "primeng/primeng";
import { SplitButtonModule } from "primeng/primeng";
import { InputTextModule } from "primeng/primeng";
import { PasswordModule } from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
