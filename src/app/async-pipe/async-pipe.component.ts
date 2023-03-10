import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, Observable, of } from "rxjs";

@Component({
  selector: 'app-async-pipe',
  template: `
    <ul>
      <li *ngFor="let name of namesArray$ | async">
        {{name}}
      </li>
    </ul>
    <div *ngIf="namesArray$ | async as names">
      <p>There are {{ names.length }} names: ({{names.join(', ')}})</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent {
  namesArray$ = of(['Céline', 'Cécile', 'Caroline']).pipe(delay(1000));
}
