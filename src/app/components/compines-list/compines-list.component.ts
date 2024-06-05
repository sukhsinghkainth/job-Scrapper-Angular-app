import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    // Call your API with the new page number
  }

  ngOnInit(): void { }
  constructor(private http: HttpClient) {
  }
}
