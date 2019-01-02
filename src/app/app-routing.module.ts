import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReportsComponent } from './reports/reports.component';
import {Crud2Component} from './crud2/crud2.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},

  // { path: '', redirectTo: '/Crud2Component', pathMatch: 'full' },

  { path: 'Crud2Component', component: Crud2Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userDetail/:emailID', component: UserDetailComponent },
  { path: 'reports', component: ReportsComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
}
