import { Injectable } from '@angular/core';

import { IUserQuestions } from '../interfaces/IUserQuestions';
import { environment } from '../../../environments/environment';


@Injectable()
export class EsignApiService {
  esignAPIUrl: String;

  constructor() {
    this.esignAPIUrl = environment.esignAPIUrl;
  }

  getESignAPIUrl(){
    return this.esignAPIUrl;
   }
  
}
