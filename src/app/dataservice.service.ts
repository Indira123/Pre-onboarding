import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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
  commonURL = 'http://yp1000466lt:8005/';
 // commonURL = 'http://localhost:3000/';
  constructor(
    private httpClient: HttpClient
  ) { }

  loginService(data): Observable<String> {
    this.configUrl = 'http://YP1000466LT:8005/sendUserCredentials';
    return this.httpClient.post<String>(this.configUrl, data, httpOptions);
  }

  getData(method): Observable<any> {
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'  
    });
    let options = { headers: headers };
    let url = this.commonURL + method;
    return this.httpClient.get(url, options);
  }

  postData(method, data): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let url = this.commonURL + method;
    return this.httpClient.post(url, data, options);
  }

  putData(id, method, data): Observable<any> {
    debugger;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let url= this.commonURL + method;
//    let url= this.commonURL + method + '/' + id;
   
    return this.httpClient.put(url, data, options);
  }

  getDataByID(id, method): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let url = this.commonURL + method + '/' + id;
    return this.httpClient.get(url, options);
  }

  deleteData(id, method): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let url = this.commonURL + method + '/' + id;
    return this.httpClient.delete(url, options);
  }
}

