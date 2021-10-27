import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get("http://demo14.appman.in/api/Category/GetCategoryList")
  }
}
