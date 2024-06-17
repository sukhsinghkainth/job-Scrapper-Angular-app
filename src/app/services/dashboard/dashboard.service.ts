import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { Idashboard } from 'src/app/interface/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http : HttpService) { }
  getdata(){     
    return this.http.get<Idashboard>("admin/")
  }
}
