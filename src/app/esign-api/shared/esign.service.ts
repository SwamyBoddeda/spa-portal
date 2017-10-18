import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';


@Injectable()
export class ESignService {

  constructor() {
    this.getServiceURL();
  }

  getServiceURL(){
   return environment.esignAPIUrl;
  }
  
}
  
