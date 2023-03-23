import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, switchMap } from "rxjs";
import { CommonService } from "../common.service";

@Component({
  selector: 'app-late-subscriber',
  template: `
      <p><button #bt>Late Subscriber</button></p>
      <p class="value" *ngIf="lateValue$ | async as value">Late value: {{value}}</p>
  `,
})
export class LateSubscriberComponent implements AfterViewInit{
  @ViewChild('bt') button!: ElementRef<HTMLButtonElement>;
  lateValue$?: Observable<number>;

  constructor(private evenService: CommonService) {
  }

  ngAfterViewInit(): void {
    this.lateValue$ = fromEvent(this.button.nativeElement,'click').pipe(
      switchMap((_) => this.evenService.even$)
    );
  }
}
