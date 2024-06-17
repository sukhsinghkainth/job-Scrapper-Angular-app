import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})


// https://admin.fisca-quest.be/admin/company/companies_list?page=2

export class CompaniesService {
  constructor(private http : HttpService) { }
  companiesData(number : number){     
    return this.http.get<any>(`admin/company/companies_list?page=${number}`)
  }
}
