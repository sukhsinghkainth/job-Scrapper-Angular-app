import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { CompanyDetailResponse, UpdateCompanyRequest, UpdateCompanyResponse, comp_lis_res } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})


export class CompaniesService {
  constructor(private http: HttpService) { }
  companiesData(number: number) {
    return this.http.get<comp_lis_res>(`admin/company/companies_list?page=${number}`)
  }
  updateCompaniesData(data: UpdateCompanyRequest) {
    return this.http.postt<UpdateCompanyRequest, UpdateCompanyResponse>
      ('admin/company/update_company_detail_ajax', data)
  }
  companiesDetails(Cid: string) {
    return this.http.get<CompanyDetailResponse>(`admin/company/company_details/${Cid}`)
  }
}
