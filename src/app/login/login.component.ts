import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { CryptoJS } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validationForm: FormGroup;
  successMessage = 'Valid entry';
  errorMessage = 'Invalid entry';
  username: string;
  password: string;
  data;
  constructor(private router: Router, private dataserviceService: DataserviceService) {
  }
  login(): void {
    /* if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['dashboard']);
     } else {
      alert('Invalid credentials');
     }*/
    this.data = {
      'username': this.username,
      'password': this.password
    };
    this.dataserviceService.loginService(this.data).subscribe((dataRes) => {
      console.log(dataRes);
      this.router.navigate(['dashboard']);
    });
  }
  ngOnInit() {
  }

}
