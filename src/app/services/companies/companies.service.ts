import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { UpdateCompanyRequest, UpdateCompanyResponse } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})


// https://admin.fisca-quest.be/admin/company/companies_list?page=2

export class CompaniesService {
  constructor(private http: HttpService) { }
  companiesData(number: number) {
    return this.http.get<any>(`admin/company/companies_list?page=${number}`)
  }
  updateCompaniesData(data: UpdateCompanyRequest) {
    return this.http.postt<UpdateCompanyRequest, UpdateCompanyResponse>
      ('admin/company/update_company_detail_ajax', data)
  }
  companiesDetails(Cid : string){
      return this.http.get<any>(`admin/company/company_details/${Cid}`)
  }
}
