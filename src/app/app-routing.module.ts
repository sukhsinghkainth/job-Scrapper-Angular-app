import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { CompinesListComponent } from './components/compines-list/compines-list.component';
import { LogComponent } from './components/log/log.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './authGuard/authGuard';

const routes: Routes = [
  { path: "", component: MainComponent, canActivate: [authGuard] ,pathMatch: 'full'},
  { path: 'admin/job_listing', component: JoblistingComponent, canActivate: [authGuard] },
  { path: "admin/company/companies_list", component: CompinesListComponent, canActivate: [authGuard] },
  { path: "admin/log_files", component: LogComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
