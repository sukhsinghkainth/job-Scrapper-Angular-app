import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent {

    @Input() cardTitle : string = "";
    @Input() Description : string = "";
    @Input() cardColor: string = "";
    @Input() icon : string = ''
   @Input() iconColor : string = ''
}
