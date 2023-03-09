import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, Observable, of } from "rxjs";

@Component({
  selector: 'app-async-pipe',
  template: `
    <ul>
      <li *ngFor="let name of namesEmitter$ | async">
        {{name}}
      </li>
    </ul>
    <div *ngIf="namesEmitter$ | async as names">
      <p>There are {{ names.length }} names: ({{names.join(', ')}})</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent {
  namesEmitter$: Observable<string[]>;

  constructor() {
    this.namesEmitter$ = of(['Céline', 'Cécile', 'Caroline']).pipe(delay(1000));
  }
}
