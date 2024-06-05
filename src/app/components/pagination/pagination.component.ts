// pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();

  get pageNumbers(): number[] {
    const visiblePages = 5;
    let startPage: number, endPage: number;
    if (this.totalPages <= visiblePages) {
      // less than `visiblePages` total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than `visiblePages` total pages so calculate start and end pages
      const middlePage = Math.ceil(visiblePages / 2);
      if (this.currentPage < middlePage) {
        startPage = 1;
        endPage = visiblePages;
      } else if (this.currentPage + middlePage - 1 >= this.totalPages) {
        startPage = this.totalPages - visiblePages + 1;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - middlePage + 1;
        endPage = startPage + visiblePages - 1;
      }
    }
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    return pages;
  }
  goToPage(page: number): void {
    this.pageChanged.emit(page);
  }
}
