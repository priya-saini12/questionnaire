import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
url = 'http://localhost:3000/Questions';
url1 = "http://localhost:3000/Response";
  constructor(private _http: HttpClient) { }
getQuestions():Observable<any>{
return this._http.get<any>(this.url);
}
selectedQuestions(response :any ):Observable<any>{
return this._http.post<any>(this.url1, response);
}
get():Observable<any>{
return this._http.get<any>(this.url1);
}
}
