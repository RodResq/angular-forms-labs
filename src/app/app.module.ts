import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataDrivenComponent } from './components/data-driven/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
