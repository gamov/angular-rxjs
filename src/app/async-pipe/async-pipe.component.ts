import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of, startWith } from "rxjs";

@Component({
  selector: 'app-async-pipe',
  template: `
    <ul>
      <li *ngFor="let name of (namesArray$ | async)">
        {{name}}
      </li>
    </ul>
    <ng-container *ngIf="namesArray$ | async as names">
      <p>There are {{ names.length }} names: ({{names.join(', ')}})</p>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent {
  namesArray$ = of(['Céline', 'Cécile', 'Caroline'])
    .pipe(
      delay(2000),
      startWith(['No data yet'])
    );
}
