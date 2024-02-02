import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
url = 'http://localhost:3000/Questions';
  constructor(private _http: HttpClient) { }
getQuestions():Observable<any>{
return this._http.get<any>(this.url);
}
}
