import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { ActivatedRoute } from "@angular/router";
import { EmpFileUploadService } from "src/app/dashboard/emp.upload";
import { HttpResponse } from "@angular/common/http";
import { CandidateDetails } from "src/app/models/CandidateDetails";
import { DataserviceService } from "src/app/dataservice.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userDetails: CandidateDetails;
  userDetailsForm: CandidateDetails;
  //URL
  candidateDetails= 'candidateDetails';

  constructor(private _Activatedroute: ActivatedRoute, private uploadService: EmpFileUploadService,private dataserviceService: DataserviceService) {
    this.userDetails = new CandidateDetails();
    this.userDetailsForm = new CandidateDetails();
    let email = this._Activatedroute.snapshot.params['emailID'];
    console.log();
    // this.uploadService.getUserDetails(email).subscribe(ev => {
    //   if (ev instanceof HttpResponse) {
    //     console.log(ev.body);
    //     this.userDetails = ev.body;
        
    //   }
    // });
    this.dataserviceService.getDataByID(email, this.candidateDetails).subscribe(res => {
      console.log(res);
      this.userDetails = res;
      this.userDetailsForm = JSON.parse(JSON.stringify(this.userDetails));
    },
      err => {
        console.log(err.message);
      });
    

  }

  ngOnInit() {
  }

}
