import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Observable, Subscription, tap } from "rxjs";
import { CommonService } from "../common.service";

@Component({
  selector: 'app-refactored',
  template: '<p>Current value: {{ currentValue$ | async }}</p>'
})
export class RefactoredComponent {

  currentValue$: Observable<number>;

  constructor(
    commonService: CommonService
  ) {
    this.currentValue$ = commonService.even$;
  }
}
