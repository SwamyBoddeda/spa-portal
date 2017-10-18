import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EsignApiService } from '../shared/esign-api.service';

import { IUserQuestions } from '../interfaces/IUserQuestions';
import { IQuestions} from '../interfaces/IUserQuestions';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  private esignAPIUrl;
  private guid;
  private lineOfBusiness;
  private appName;
  public title: string;
  public message: string;
  public valueIncorrect = false;
 // public questions:any[] = [];
  status: string;
  questions: IUserQuestions;
 

  constructor(private http: HttpClient, private route: ActivatedRoute, 
   
    private apiService: EsignApiService
      ) { 
      this.route.params.subscribe((params: Params) =>{
        console.log(params);
        this.guid = params['guid'];
        this.lineOfBusiness = params['lob'];
        this.appName = params['appName'];
      });
      this.esignAPIUrl = this.apiService.getESignAPIUrl();
      
    }

    ngOnInit() {
      let headers = new Headers;
      this.getQuestions();
    }
    
    getQuestions(){
      const headers = new HttpHeaders().append('LOB', this.lineOfBusiness)
      .append('applicationName', this.appName)
      const url = `${this.esignAPIUrl}/${this.guid}/questions`;
        return this.http.get<IUserQuestions>(url, {headers: headers}).subscribe( data => {
          this.questions = data;
          this.status = "success";
         },
         (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
          this.status = err.error;
        }
        );
    }


  
  dialogSubmit(value){
    if(value == false){
      this.valueIncorrect = true;

    }
  }
  
  


}
