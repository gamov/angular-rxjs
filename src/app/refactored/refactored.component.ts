import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { CommonService } from "../common.service";

@Component({
  selector: 'app-refactored',
  template: '<p>Current value: {{ currentValue$ | async }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefactoredComponent {

  currentValue$: Observable<number>;

  constructor(
    commonService: CommonService
  ) {
    this.currentValue$ = commonService.even$;
  }
}
