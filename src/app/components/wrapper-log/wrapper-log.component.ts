import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper-log',
  templateUrl: './wrapper-log.component.html',
  styleUrls: ['./wrapper-log.component.css']
})
export class WrapperLogComponent {
  @Input() logs: any
  @Input() icon!: string
}
