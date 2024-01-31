import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
url = 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }
getQuestions():Observable<any>{
return this._http.get<any>(this.url+ "Questions");
}
getQuestionsOfAngular():Observable<any>{
return this._http.get<any>(this.url+ "Angular");
}
getQuestionsOfReact():Observable<any>{
return this._http.get<any>(this.url+ "React");
}
getQuestionsOfHTMLCSS():Observable<any>{
return this._http.get<any>(this.url+ "HTML&CSS");
}
getQuestionsOfNodejs():Observable<any>{
return this._http.get<any>(this.url+ "NodeJs");
}
getQuestionsOfASP():Observable<any>{
return this._http.get<any>(this.url+ "ASP.net");
}
}
