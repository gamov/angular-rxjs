import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonService } from "../common.service";
import { combineLatest, find, first, map, Observable, scan } from "rxjs";
import filterNumber from "./filterNumber";

@Component({
  selector: 'app-fun-with-operators',
  template: `
    <p>Compounded: {{compounded$ | async}}</p>
    <p>Find 16: {{find16$ | async}}</p>
    <p>Combined at: {{combined$ | async }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FunWithOperatorsComponent {
  compounded$: Observable<number>;
  find16$: Observable<string>;
  combined$: Observable<number>;

  constructor(
    evenService: CommonService
  ) {
    this.compounded$ = evenService.even$.pipe(
      filterNumber(8),
      scan((acc, value) => acc + value, 0)
    );

    this.find16$ = evenService.even$.pipe(
      find(value => value >= 16),
      map(_ => 'Found 16! ✅')
    );

    this.combined$ = combineLatest({
      compounded: this.compounded$,
      found: this.find16$,
    }).pipe(
      map(({ compounded, found }) => compounded),
      first()
    );
  }
}
