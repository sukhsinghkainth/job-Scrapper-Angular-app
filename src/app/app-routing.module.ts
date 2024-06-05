import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { CompinesListComponent } from './components/compines-list/compines-list.component';
import { LogComponent } from './components/log/log.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: 'admin/job_listing', component: JoblistingComponent },
  { path: "admin/company/companies_list", component: CompinesListComponent },
  { path: "admin/log_files", component: LogComponent },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
