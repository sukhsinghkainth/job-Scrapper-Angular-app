import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  toggleSidebar() {
    const body = this.el.nativeElement.ownerDocument.body;
    if (body.classList.contains('toggle-sidebar')) {
      this.renderer.removeClass(body, 'toggle-sidebar');
    } else {
      this.renderer.addClass(body, 'toggle-sidebar');
    }
  }

  

}