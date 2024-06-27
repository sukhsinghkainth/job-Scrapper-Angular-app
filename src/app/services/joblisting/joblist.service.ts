import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { IFollowJobs, IJob, Iremarks, RemakrsByuser, Remark, RootObject, jobDetails, remarks, updateJob } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JoblistService {
  constructor(private http : HttpService) { }
  jobData(number : number){     
    return this.http.get<RootObject>(`admin/job_listing?page=${number}`)
  }
  jobDetails(id:number){
    return this.http.get<jobDetails>(`admin/get_job_details/${id}`)
  }
  jobUpdate(data:updateJob){
      return this.http.post<updateJob>(`admin/update_company_details`, data )
  }
  jobFollow(data:IFollowJobs){
    return this.http.post<IFollowJobs>(`admin/add_action`, data )
  }
  remarkData(id:string){
    return this.http.get<remarks>(`admin/get_remarks/${id}`)
  }
  addRemarks(data:RemakrsByuser){
    return this.http.post<RemakrsByuser>(`admin/add_remarks`,data)
  }
  getFilters(data:any){
     return this.http.get<RootObject>(`admin/${data}`)
  }
  getSearch(data:string){
    return this.http.get<RootObject>(`admin/search?${data}`)
  }
}
