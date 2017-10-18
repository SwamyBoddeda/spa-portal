import { IESignHeader } from './IEsignHeader';

export class IUserQuestions {
     esignHeader: IESignHeader;
     transactionLogId: String;
     responseStatus: string;
     applicationName: String;    
     authenticationToken :string;
     question: IQuestions;
}

export class IQuestions {
    id: number;
    question: string;
    answer: string;
}
  

