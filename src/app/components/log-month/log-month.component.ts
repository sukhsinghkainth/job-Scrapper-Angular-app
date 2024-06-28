import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogserviceService } from 'src/app/services/logservice/logservice.service';

@Component({
  selector: 'app-log-month',
  templateUrl: './log-month.component.html',
  styleUrls: ['./log-month.component.css']
})
export class LogMonthComponent {
  logDay !: string[];
  year !: string;
  month!:string
  private router = inject(ActivatedRoute)
  logService = inject(LogserviceService)
  ngOnInit(): void {
    this.year = this.router.snapshot.paramMap.get('year')!
    this.month = this.router.snapshot.paramMap.get('month')!
    this.getlogs()
  }
  getlogs() {
    this.logService.getLogs(`${this.year}/${this.month}/`).subscribe((res) => {
      this.logDay = res.body?.items!
    })
  }
}
