import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';

import { APIInterceptor } from '../shared/api.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { EsignApiService } from '../shared/esign-api.service';
import { ESignService } from '../shared/esign.service';

import { EsignPingComponent } from '../ping/esign-ping.component';
import { ESignUrlComponent } from '../ping/esign-url.component';

@NgModule({
  declarations: [
    EsignPingComponent,
    ESignUrlComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [
     EsignApiService,
     ESignService,
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {}