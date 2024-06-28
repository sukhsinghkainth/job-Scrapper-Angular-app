import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogserviceService } from 'src/app/services/logservice/logservice.service';

@Component({
  selector: 'app-logday',
  templateUrl: './logday.component.html',
  styleUrls: ['./logday.component.css']
})
export class LogdayComponent implements OnInit{
  logFiles !: string[];
  year !:string
  month !:string
  day !:string
  icon : string = 'bi bi-file-earmark-text'
    private router = inject(ActivatedRoute)
    logService = inject(LogserviceService)
    ngOnInit(): void {
      this.year = this.router.snapshot.paramMap.get('year')!
      this.month = this.router.snapshot.paramMap.get('month')!
      this.day = this.router.snapshot.paramMap.get('day')!
      this.getlogs()
    }
    getlogs() {
      let query = `${this.year}/${this.month}/${this.day}/`
      console.log(query)
      this.logService.getLogs(query).subscribe((res) => {
        this.logFiles =  res.body?.items!
        console.log(res.body)
      })
    }
}
