import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-esign-ping',
  templateUrl: './esign-ping.component.html',
  styleUrls: ['./esign-ping.component.css']
})
export class EsignPingComponent implements OnInit {
  private esignAPIUrl = environment.esignAPIUrl;
  pingResponse: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPing();
  }

  getPing(){
    const url = `${this.esignAPIUrl}/admin/ping`;
    return this.http.get(url, {responseType: 'text'}).subscribe(data =>{
    this.pingResponse = data;
  });
}

}
