import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { Idashboard } from 'src/app/datatypes/datatypes';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http : HttpService) { }
  getdata(){     
    return this.http.get<Idashboard>("admin/")
  }
}
// {comp_count: '6,686', emp_count: 0, name: null, numbers_jobs: '13,597'}