import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { Crud2Component } from './crud2/crud2.component';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserDetailComponent,
    MainDashboardComponent,
    ReportsComponent,
    Crud2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

 }
