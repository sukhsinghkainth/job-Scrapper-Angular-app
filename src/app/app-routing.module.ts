import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { LogComponent } from './components/log/log.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './authGuard/authGuard';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: MainComponent, canActivate: [authGuard], pathMatch: 'full' },
  { path: 'admin/job_listing', component: JoblistingComponent, canActivate: [authGuard] },
  { path: "admin/company", component: CompaniesComponent, canActivate: [authGuard] },
  { path: "admin/log_files", component: LogComponent, canActivate: [authGuard] },
  { path: 'admin/company/company_details/:companyId', component: CompanyDetailComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
