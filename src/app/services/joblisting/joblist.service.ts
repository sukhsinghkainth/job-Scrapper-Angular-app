import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { IFollowJobs, IJob, Iremarks } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JoblistService {
  constructor(private http : HttpService) { }
  jobData(number : number){     
    return this.http.get<any>(`admin/job_listing?page=${number}`)
  }
  jobDetails(id:number){
    return this.http.get<any>(`admin/get_job_details/${id}`)
  }
  jobUpdate(data:any){
      return this.http.post<any>(`admin/update_company_details`, data )
  }
  jobFollow(data:IFollowJobs){
    return this.http.post<IFollowJobs>(`admin/add_action`, data )
  }
  remarkData(id:string){
    return this.http.get<any>(`admin/get_remarks/${id}`)
  }
  addRemarks(data:any){
    return this.http.post<any>(`admin/add_remarks`,data)
  }
  getFilters(data:any){
     return this.http.get<any>(`admin/${data}`)
  }
  getSearch(data:any){
    return this.http.get<any>(`admin/search?${data}`)
  }
}
