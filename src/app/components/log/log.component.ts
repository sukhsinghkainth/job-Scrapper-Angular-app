import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogserviceService } from 'src/app/services/logservice/logservice.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logService = inject(LogserviceService)
  router = inject(Router)
  route = inject(ActivatedRoute)
  logs!: string[]
  ngOnInit(): void {
    this.getlogs()
  }
  getlogs() {
    this.logService.getLogs().subscribe((res) => {
      this.logs = res.body?.log_dirs!
    })
  }
}
