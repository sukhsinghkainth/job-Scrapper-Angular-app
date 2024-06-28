import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogserviceService } from 'src/app/services/logservice/logservice.service';

@Component({
  selector: 'app-log-file',
  templateUrl: './log-file.component.html',
  styleUrls: ['./log-file.component.css']
})
export class LogFileComponent implements OnInit {
  private router = inject(ActivatedRoute)
  logService = inject(LogserviceService)
  logfie!: string
  year !: string
  month !: string
  day !: string
  logContent !: string[]
  ngOnInit(): void {
    this.year = this.router.snapshot.paramMap.get('year')!
    this.month = this.router.snapshot.paramMap.get('month')!
    this.day = this.router.snapshot.paramMap.get('day')!
    this.logfie = this.router.snapshot.paramMap.get('logFile')!
    this.getlogs()
  }
  getlogs() {
    let query = `${this.year}/${this.month}/${this.day}/${this.logfie}/`
    console.log(query)
    this.logService.getLogs(query).subscribe((res) => {
      this.logContent = res.body?.log_file!
    })
  }
}
