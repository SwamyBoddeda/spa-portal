import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Component({
 
    template: `
    <h1>Welcome to ESign portal</h1>
    <hr>

    <h4>Please click <b>"PING"</b> link to test ESign Portal, ESign API and ESign service connections
    <a href="/ping">PING ESign service</a><br><br>
    </h4>
    
    <h3>Please click <b>"START ESIGN"</b> link to start esignature process
    <a href="/retrieveQuestions/testguid/AUTO">START ESIGN</a>
    </h3>

    
    
  `
})
export class ESignUrlComponent implements OnInit {
  
  ngOnInit() {
  }
}

