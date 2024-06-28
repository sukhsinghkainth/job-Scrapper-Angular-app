import { Component, inject  , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogserviceService } from 'src/app/services/logservice/logservice.service';

@Component({
  selector: 'app-logyear',
  templateUrl: './logyear.component.html',
  styleUrls: ['./logyear.component.css']
})
export class LogyearComponent implements OnInit {
  logMonths !: string[];
  year !:string
    private router = inject(ActivatedRoute)
    logService = inject(LogserviceService)
    ngOnInit(): void {
      this.year = this.router.snapshot.paramMap.get('year')!
      this.getlogs()
    }
    getlogs() {
      this.logService.getLogs(`${this.year}/`).subscribe((res) => {
        this.logMonths =  res.body?.items!
      })
    }
}
