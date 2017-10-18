import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { EsignPingComponent } from './esign-api/ping/esign-ping.component';
import { ESignUrlComponent } from './esign-api/ping/esign-url.component';
import { DialogComponent } from './esign-api/dialog/dialog.component';

const routes: Routes = [
//{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ESignUrlComponent },
  { path: 'ping', component: EsignPingComponent },
  { path: ':appName/:lob/:guid', component: DialogComponent},
  // { path: 'not-found', component: PageNotFoundComponent },
   // { path: 'not-found', component: QuestionsComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
