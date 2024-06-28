import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { LogComponent } from './components/log/log.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { JobscardComponent } from './components/joblisting/jobscard/jobscard.component';
import { CustomInterceptor } from './services/interceptor/httpinterceptor';
import { HomecardsComponent } from './components/main/homecards/homecards.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { WrapperLogComponent } from './components/wrapper-log/wrapper-log.component';
import { LogyearComponent } from './components/logyear/logyear.component';
import { LogMonthComponent } from './components/log-month/log-month.component';
import { LogdayComponent } from './components/logday/logday.component';
import { LogFileComponent } from './components/log-file/log-file.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    JoblistingComponent,
    LogComponent,
    FooterComponent,
    LoginComponent,
    PaginationComponent,
    LoaderComponent,
    JobscardComponent,
    HomecardsComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    WrapperLogComponent,
    LogyearComponent,
    LogMonthComponent,
    LogdayComponent,
    LogFileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
