import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
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
export class EmpFileUploadService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, userName: string, typeOfPDF: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('userFile', file);
    console.log(formdata);
    const req = new HttpRequest('POST', 'http://YP1000466LT:8005/readPDF/' +  typeOfPDF + '/userName/' + userName, formdata,
    {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getUserDetails(email: any): Observable<HttpEvent<{}>> {
    const req = new HttpRequest('GET', 'http://YP1000466LT:8005/candidateDetails/' +  email);
      return this.http.request(req);
  }
}
