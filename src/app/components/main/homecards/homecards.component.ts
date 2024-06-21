import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent {
redirect(title :string) {
  console.log('hello',title)
}
    @Input() cardTitle : string = "";
    @Input() Description : string = "";
    @Input() cardColor: string = "";
    @Input() icon : string = ''
   @Input() iconColor : string = ''
}
