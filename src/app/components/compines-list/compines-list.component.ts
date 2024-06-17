import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies/companies.service';

@Component({
  selector: 'app-compines-list',
  templateUrl: './compines-list.component.html',
  styleUrls: ['./compines-list.component.css']
})
export class CompinesListComponent implements OnInit {


  currentPage = 1;
  totalPages = 10; // This should be dynamic based on the API response

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }


  ngOnInit(): void { 
    this.companyService.companiesData(this.currentPage).subscribe(res=>{console.log(res.body)})
  }
  constructor(private companyService : CompaniesService) {
  }
}
