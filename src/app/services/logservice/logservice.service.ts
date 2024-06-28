import { Injectable, inject } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

interface logDir {
  log_dirs: Array<string>,
  items? : Array<string>,
  log_file : Array<string>
}
@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  private http = inject(HttpService)

  getLogs(data? : string) {
    return this.http.get<logDir>(`admin/log_files/${data ? data : ""}`)
  }
}
