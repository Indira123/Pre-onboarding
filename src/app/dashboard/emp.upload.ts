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

  pushFileToStorage(file: File, type: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('userFile', file);
    console.log(formdata);
    const req = new HttpRequest('POST', 'http://YP1000466LT:8005/PDF/' + type , formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
