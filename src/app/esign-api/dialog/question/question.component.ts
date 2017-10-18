import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    public result: any;
    closeResult: string;
  constructor( private dialogsService: DialogService,) { }

  public openDialog() {
    this.dialogsService
      .confirm('Verification', 'To proceed to E-Sign Autorization screens we’ll need to verify your identity. Please answer the question below.')
     .subscribe(res => this.result = res);
  }

  public temp = 0;
  
    public questions = []
  
    questionsMockData = [
      {
          id: 1, 
          query:'In what year were you born?',
          options: [{
              value: 1952
              },
              {
              value:  1967
              },
              {
              value:1982
              },
              {
              value: 1988
              },
              {
              value:'None of the above'}
              ]
      },
      {
          id: 1, 
          query:'what is the ZIP Code where you e?',
          options: [{
              value: 35801
              },
              {
              value:  80205   
              },
              {
              value:32831
              },
              {
              value: 43215
              },
              {
              value:'None of the above'}
              ]
      }
  ];
  
  public checkBoxValue;
  onChkChange(value){
      this.checkBoxValue = value;
  }
  
  ngOnInit() {
   this.questions.push(this.questionsMockData[0])
      
  }
  

}
