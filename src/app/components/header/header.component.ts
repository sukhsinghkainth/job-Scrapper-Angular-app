import { Component, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef,
    private router: Router
  ) { }

  serach = '';
 
  toggleSidebar() {
    const body = this.el.nativeElement.ownerDocument.body;
    if (body.classList.contains('toggle-sidebar')) {
      this.renderer.removeClass(body, 'toggle-sidebar');
    } else {
      this.renderer.addClass(body, 'toggle-sidebar');
    }
  }

  onSearchChange(term:string){
     this.serach = term;
  }
 goto(userInput : string){
  console.log(userInput)
  this.router.navigate(['/admin/job_listing'], { queryParams: { job_search: userInput } });
 }
 logout(){
  localStorage.removeItem('token')
  this.router.navigateByUrl("/login")
 }
}
