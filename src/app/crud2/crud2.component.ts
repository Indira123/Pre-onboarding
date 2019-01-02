import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "src/app/dataservice.service";
import { BusinessUnit } from "src/app/models/businessUnit";
import { BusinessGroup } from "src/app/models/businessGroup";
@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.scss']
})
export class Crud2Component implements OnInit {
  isBusinessUnit = false;
  isBusinessGroup = false;
  isEdit = false;
  businessUnit: BusinessUnit;
  businessGroup: BusinessGroup;
  allBusinessUnits = [];
  allBusinessGroup = [];
  //URLs
  allBusinessUnit = 'allBusinessUnits';
  addBusinessUnit = 'addBusinessUnit';
  deleteBusinessUnit = 'deleteBusinessUnit';
  updateBusinessUnit = 'updateBusinessUnit';

  allBusinessGroups = 'allBusinessGroups';
  addBusinessGroup = 'addBusinessGroup';
  updateBusinessGroup = 'updateBusinessGroup';
  deleteBusinessGroup = 'deleteBusinessGroup';
  //
  constructor(private dataserviceService: DataserviceService) {
    this.businessUnit = new BusinessUnit();
    this.businessGroup = new BusinessGroup();
  }

  ngOnInit() {
    this.isBusinessUnit = true;
    this.get(this.allBusinessUnit);
    
  }

  get(method) {
    this.dataserviceService.getData(method).subscribe((dataRes) => {
      console.log(dataRes);
      if (this.isBusinessUnit) {
        this.allBusinessUnits = dataRes;
      } else if (this.isBusinessGroup) {
        this.allBusinessGroup = dataRes;
      }
      
    },
      err => {
        console.log(err.message);
      });
  }

  addNew(method, data) {
    this.dataserviceService.postData(method, data).subscribe(res => {
      console.log(res);
      if (this.isBusinessUnit) {
         this.get(this.allBusinessUnit);
      } else if (this.isBusinessGroup) {
        this.get(this.allBusinessGroups);
      }
      this.resetForm();
    },
      err => {
        console.log(err.message);
      });
  }

  edit(id, method, data) {
    
    this.dataserviceService.putData(id, method, data).subscribe(res => {
      console.log(res);
     if (this.isBusinessUnit) {
         this.get(this.allBusinessUnit);
      } else if (this.isBusinessGroup) {
        this.get(this.allBusinessGroups);
      }
    },
      err => {
        console.log(err.message);
      });
  }

  getByID(id, method) {
    this.dataserviceService.getDataByID(id, method).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err.message);
      });
  }

  delete(id, method) {
    this.dataserviceService.deleteData(id, method).subscribe(res => {
      console.log(res);
     if (this.isBusinessUnit) {
         this.get(this.allBusinessUnit);
      } else if (this.isBusinessGroup) {
        this.get(this.allBusinessGroups);
      }
    },
      err => {
        console.log(err.message);
      });
  }

  resetForm() {
    this.businessUnit = new BusinessUnit();
    this.businessGroup = new BusinessGroup();
    this.isEdit = false;
  }

  onBUEditClick(data) {
    this.isEdit = true;
    this.businessUnit = JSON.parse(JSON.stringify(data));
  }

  onBGEditClick(data) {
    this.isEdit = true;
    this.businessGroup = JSON.parse(JSON.stringify(data));
  }
}
