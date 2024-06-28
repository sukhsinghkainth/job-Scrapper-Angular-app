import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { LogComponent } from './components/log/log.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './authGuard/authGuard';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { LogyearComponent } from './components/logyear/logyear.component';
import { LogMonthComponent } from './components/log-month/log-month.component';
import { LogdayComponent } from './components/logday/logday.component';
import { LogFileComponent } from './components/log-file/log-file.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: MainComponent, canActivate: [authGuard], pathMatch: 'full' },
  { path: 'admin/job_listing', component: JoblistingComponent, canActivate: [authGuard] },
  { path: "admin/company", component: CompaniesComponent, canActivate: [authGuard] },
  { path: "admin/log_files", component: LogComponent, canActivate: [authGuard] },
  { path: "admin/log_files/:year", component: LogyearComponent, canDeactivate: [authGuard] },
  { path: "admin/log_files/:year/:month", component: LogMonthComponent, canActivate: [authGuard] },
  { path: "admin/log_files/:year/:month/:day", component: LogdayComponent, canActivate: [authGuard] },
  { path: "admin/log_files/:year/:month/:day/:logFile", component: LogFileComponent, canActivate: [authGuard] },
  { path: 'admin/company/company_details/:companyId', component: CompanyDetailComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
