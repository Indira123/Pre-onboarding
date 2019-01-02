import { Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { EmpFileUploadService } from './emp.upload';
import { HttpClient, HttpResponse, HttpEventType, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import {ReqBody} from './custom.type';
import { $ } from 'protractor';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

isDashboard: boolean;
isReports: boolean;
isDetailPage: boolean;
file: string;
selectedFiles: FileList;
currentFileUpload: File;
typeOfPDF: string;
ReqBody: {
  'userName': string,
  'typeOfPDF': string
};
emailID: any;
progress: { percentage: number } = { percentage: 0 };
@ViewChild('closeBtn') closeBtn: ElementRef;

constructor(private render: Renderer, public navCtrl: NgxNavigationWithDataComponent, private http: HttpClient, private router: Router,
   private uploadService: EmpFileUploadService) {

}
  w3_open() {
    if (this.isDetailPage === true) {
      document.getElementById('userdetailsCont').style.marginLeft = '25%';
    }
  document.getElementById('mySidebar').style.display = 'block';
  document.getElementById('openNav').style.display = 'none';
  document.getElementById('closeNav').style.display = 'inline-block';
  }
  w3_close() {
    if (this.isDetailPage === true) {
      document.getElementById('userdetailsCont').style.marginLeft = '0%';
    }
    document.getElementById('main').style.marginLeft = '0%';
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('openNav').style.display = 'inline-block';
    document.getElementById('closeNav').style.display = 'none';
  }
  ngOnInit() {
    document.getElementById('closeNav').style.display = 'none';
    this.isDashboard = true;
    this.isReports = false;
    this.isDetailPage = false;
  }
  addAciveClass(event: any) {
    if (event.target.nextElementSibling !== null ) {
      this.render.setElementClass(event.target.nextElementSibling, 'active', false);
    }
    if (event.target.previousElementSibling !== null) {
      this.render.setElementClass(event.target.previousElementSibling, 'active', false);
    }
    this.render.setElementClass(event.target, 'active', true);
    if (event.target.getAttribute('title') === 'Reports') {
      this.isDashboard = false;
      this.isReports = true;
      this.isDetailPage = false;
    } else if (event.target.getAttribute('title') === 'Dashboard') {
      this.isDashboard = true;
      this.isReports = false;
      this.isDetailPage = false;
    }
  }
  uploadDoc(): void {
    debugger;
    if (this.file === undefined) {
      alert('Please select PDF file');
    } else {
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);
      let reqBody: ReqBody;
      reqBody = {
        'userName': 'vijaya.tiple',
        'typeOfPDF': 'Trainee'
      };

      this.uploadService.pushFileToStorage(this.currentFileUpload, reqBody.userName, reqBody.typeOfPDF).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event.body);
        this.emailID = event.body;
        // this.uploadService.getUserDetails( this.emailID ).subscribe(ev => {
        //   if (ev instanceof HttpResponse) {
        //     console.log(ev.body);
        //    // this.navCtrl.navigate('userDetail/', ev.body);
        //     //this.navCtrl.data(ev.body);
            this.router.navigate(['/userDetail', this.emailID]);
        // }
        // });
      }
    });
    this.selectedFiles = undefined;
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
