import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, interval, map, Observable, startWith, switchMap, takeUntil } from "rxjs";

@Component({
  selector: 'app-stream-control',
  template: `
    <div>
      <input type="checkbox" #cb [checked]="false"/> toggle stream
    </div>
    <p>{{stream$ | async}}</p>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamControlComponent implements AfterViewInit {
  @ViewChild('cb') checkbox!: ElementRef<HTMLInputElement>;

  stream$?: Observable<number>;

  ngAfterViewInit(): void {
    const checked$ = fromEvent(this.checkbox.nativeElement, 'change').pipe(
      map(event => (event.target as HTMLInputElement).checked));

    this.stream$ = checked$.pipe(
      startWith(this.checkbox.nativeElement.checked),
      filter(checked => checked),
      switchMap(() =>
        interval(1000).pipe(takeUntil(checked$.pipe(filter(checked => !checked)))))
    );
  }
}
