import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

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
  constructor(private router: Router) { 
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
  
  ngOnInit() {
  }

}
