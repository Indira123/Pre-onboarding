import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  configUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  loginService(data): Observable<String> {
    this.configUrl = 'http://YP1000466LT:8005/sendUserCredentials';
    return this.httpClient.post<String>(this.configUrl, data, httpOptions);
  }
}

