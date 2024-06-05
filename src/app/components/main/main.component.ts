import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  comp_count: string = "0"
  emp_count: number = 0;
  name: String = '0';
  numbers_jobs : string = '0'

  ngOnInit(): void {
    this.get()
  }

  constructor(
    private dashService: DashboardService
  ) { }

  get() {
    this.dashService.getdata().subscribe((res) => {
      console.log(res.body)
      let { comp_count, emp_count, name, numbers_jobs } = res.body!;
      this.comp_count = comp_count;
      this.emp_count = emp_count;
      this.name = name;
      this.numbers_jobs = numbers_jobs;
    })
  }
}
