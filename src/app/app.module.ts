import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { RequestOptions, BaseRequestOptions } from '@angular/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DialogModule } from './esign-api/dialog/dialog.module';
import { CoreModule } from './esign-api/core/core.module';
//import { NgbdModalComponent, NgbdModalContent } from './modal.component';


import {
  MatDialogModule, MatButtonModule, 
  MatListModule,
  MATERIAL_COMPATIBILITY_MODE
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    DialogModule,
    BrowserModule,
    MatDialogModule,
    MatListModule,
    BrowserAnimationsModule,
    [NgbModule.forRoot()]
  ],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
   // { provide: RequestOptions, useClass: BaseRequestOptions },
 //   { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  //entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
