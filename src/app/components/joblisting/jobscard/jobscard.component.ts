import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jobscard',
  templateUrl: './jobscard.component.html',
  styleUrls: ['./jobscard.component.css']
})
export class JobscardComponent {


  @Input() job: any;
  @Input() loading: boolean = false;
  @Output() jobClick = new EventEmitter<number>();

  onjobclick(jobId: number) {
    this.jobClick.emit(jobId)
  }
}
